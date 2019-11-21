import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';
import { faHome , faMoneyBill , faCalendarAlt , faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sideBar = props => (
  <AuthContext.Consumer>
    {(context) => {
      return(
         
        <div className="sidebar-menu"> 
        {context.token && (
        <Nav className="sidebar-item">
        <ul>
            <li>
            <NavLink to="/Home"><FontAwesomeIcon icon={faHome} fixedWidth/> Dashboard</NavLink>
            </li>
            <li>
            <NavLink to="/auth"><FontAwesomeIcon icon={faChartLine} fixedWidth/> Analytics</NavLink>
            </li>
            <li>
            <NavLink to="/auth"><FontAwesomeIcon icon={faMoneyBill} fixedWidth/> Subscription</NavLink>
            </li>
            <li>
            <NavLink to="/auth"><FontAwesomeIcon icon={faCalendarAlt} fixedWidth/> Campain</NavLink>
            </li>
        </ul>
        </Nav>
        )}
         
        </div>

      )
    }}
  
  </AuthContext.Consumer>
);

export default sideBar;