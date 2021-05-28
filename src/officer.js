import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ShowUsers from "./components/ShowUsers";
import PendingComplaints from "./components/PendingComplaints";
import CompletedComplaints from "./components/CompletedComplaints";
import AddCriminal from "./components/AddCriminal";
import ShowCriminal from "./components/ShowCriminal";
import Login from './components/login.component';

class officer extends Component {
  render() {
    return(
   
    <Router>
       <Navbar></Navbar>
      <Switch>
      
       
      <div className="container">  
      <Route exact path="/ShowUsers" component={ShowUsers} />
      <Route exact path="/CompletedComplaints" component={CompletedComplaints} />   
      <Route exact path="/PendingComplaints" component={PendingComplaints} />
      <Route exact path="/AddCriminal" component={AddCriminal} />
      <Route exact path="/ShowCriminal" component={ShowCriminal} />
      
      <Route exact path="/" component={Login} />
      </div>
      
      </Switch>
    </Router>
  );
}
}

export default officer;