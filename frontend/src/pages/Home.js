import React, { Component } from 'react';
import AuthContext from '../context/auth-context';
import './Home.css';



class HomePage extends Component {
    state={

    };
    static contextType = AuthContext;

    render() {
        return (
            <div className="dashboard">
                Home
            </div>
        );};
    


}

export default HomePage;