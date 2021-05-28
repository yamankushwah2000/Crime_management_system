import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { Component } from 'react';
import CreateUser from './components/create-user.component';
import Login from './components/login.component';
import user  from "./user";
import officer  from "./officer";

class App extends Component{
  render(){
  return (
    <Router>

      <Route exact path="/user" component={user} />
      <Route exact path="/officer" component={officer} />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={CreateUser} />
      </Switch>
      </div>
      
    </Router>
  );
}
}
export default App;
