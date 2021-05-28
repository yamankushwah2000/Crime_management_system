import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/user/home" className="navbar-brand">HOME</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user/complaint" className="nav-link" style={{marginLeft:30}}>REGISTER COMPLAINT</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user/crimestat" className="nav-link" style={{marginLeft:30}}>CRIME STATS</Link>

          </li>
          
        </ul>
        <Link to="/" className="navbar-brand">LOGOUT</Link>
        </div>
      </nav>
    );
  }
};