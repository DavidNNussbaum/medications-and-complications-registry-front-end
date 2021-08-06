import React, {Component} from 'react';
import { render } from '@testing-library/react';
import '../App.css';
import Medications from './Medications';
import Navbar from "./Navbar";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
          <>
          <div className="navbar">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/login" component={Login}/> 
              <Route path="/signup" component={Signup}/>
              <Route path="/medications" component={Medications}/>
              <Route path="/logout" component={Logout}/>
            </Switch>
          </Router>
        </div>
        </>
        );
      }
}

export default App;


 