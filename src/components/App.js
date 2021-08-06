import React, {Component} from 'react';
import { render } from '@testing-library/react';
import '../App.css';
import Medications from './Medications';
import Navbar from "./Navbar";
import Home from './Home';
import Logon from './Logon';
import Signup from './Signup';
import Logoff from './Logoff';
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
              <Route path="/logon" component={Logon}/> 
              <Route path="/signup" component={Signup}/>
              <Route path="/medications" component={Medications}/>
              <Route path="/logoff" component={Logoff}/>
            </Switch>
          </Router>
        </div>
        </>
        );
      }
}

export default App;


 