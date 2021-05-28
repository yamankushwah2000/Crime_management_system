
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/home" className="navbar-brand">HOME</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto"style={{marginLeft:210}} >
          <li className="navbar-item">
          <Link to="/ShowUsers" className="nav-link" style={{marginLeft:20}}>SHOW USERS</Link>
          </li>
          <li className="navbar-item">
          <Link to="/PendingComplaints" className="nav-link" style={{marginLeft:20}}>PENDING COMPLAINTS</Link>
          </li>
          <li className="navbar-item">
          <Link to="/CompletedComplaints" className="nav-link" style={{marginLeft:20}}>RESOLVED COMPLAINTS</Link>
          </li>
          <li className="navbar-item">
          <Link to="/AddCriminal" className="nav-link" style={{marginLeft:20}}>ADD CRIMINAL</Link>
          </li>
          <li className="navbar-item">
          <Link to="/ShowCriminal" className="nav-link" style={{marginLeft:20}}>SHOW CRIMINALS</Link>
          </li>
          
          </ul>
          <Link to="/" className="navbar-brand">LOGOUT</Link>
          
        </div>        
      </nav>
    );
  }
};
