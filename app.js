const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const Event = require('./models/event');
const app = express();
const encodedPassword = encodeURIComponent(process.env.MONGO_PASSWORD);
const encodedUser = encodeURIComponent(process.env.MONGO_USER)

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(`
        type Event {
          _id: ID!
          title: String!
          description: String!
          price: Float!
          date: String!
        }
        input EventInput {
          title: String!
          description: String!
          price: Float!
          date: String!
        }
        type RootQuery {
            events: [Event!]!
        }
        type RootMutation {
            createEvent(eventInput: EventInput): Event
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        return events;
      },
      createEvent: args => {
       const event = new Event ({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date)
       });
        events.save();
        return event;
      }
    },
    graphiql: true
  })
);


mongoose.connect(`mongodb+srv://${encodedUser}:${encodedPassword}@rhine-test-pvzja.azure.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true})
.then( ()=> {
  app.listen(3000);
})
.catch(err =>{ console.log(err);
});



