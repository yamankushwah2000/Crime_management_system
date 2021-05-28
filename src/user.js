import './App.css';
//import { Component } from 'react';
import complaint from './components/complaint.component';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navuser.component";
import Login from './components/login.component';
import ShowCrimetype from './components/crimetype.component';

function user() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Router>
      <Route exact path="/" component={Login} />
      </Router>
      
      <br/>
      <Route path="/user/complaint" component={complaint} />
      <Route path="/user/crimestat" component={ShowCrimetype} />
      <Switch>
      <Route exact path="/" component={Login} />
      </Switch>
      </div>
      
    </Router>
    
  );
}
export default user;