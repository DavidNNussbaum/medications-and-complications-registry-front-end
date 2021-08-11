import React from 'react';
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}
const Navbar = (props) =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'black'
      }}
    >Home</NavLink>
    {props.currentUser.user === null &&
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'black'
        }}
      >Login</NavLink>
    }
    {props.currentUser.user === null &&
      <NavLink
        to="/signup"
        exact
        style={link}
        activeStyle={{
          background: 'black'
        }}
      >Signup</NavLink>
    }
     <NavLink
    to="/medications"
    exact
    style={link}
    activeStyle={{
      background: 'black'
      }}
    >Medications And Complications</NavLink>
    {props.currentUser.user !== null &&
      <NavLink
        to="/logout"
        exact
        style={link}
        activeStyle={{
          background: 'black'
        }}
      >Logout</NavLink>
    }
  </div>;

  export default Navbar;