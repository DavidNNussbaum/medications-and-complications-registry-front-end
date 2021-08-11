import React, {Component} from 'react';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import '../App.css';
import Medications from './Medications';
import Navbar from "./Navbar";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import { signupUser } from '../actions/auth.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
          <>
          <div className="navbar">
          <Router>
            <Navbar currentUser={this.props.currentUser}/>
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/login" component={Login}/> 
              <Route path="/signup">
                <Signup setUser={this.props.setUser}/>
              </Route>
              <Route path="/medications" component={Medications}/>
              <Route path="/logout" component={Logout}/>
            </Switch>
          </Router>
        </div>
        </>
        );
      }
}

const mapStateToProps = state => {
  return {
     currentUser: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setUser: user => dispatch(signupUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

 


 