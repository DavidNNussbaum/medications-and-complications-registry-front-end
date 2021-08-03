import React from 'react';
import { NavLink } from 'react-router-dom';
const link = {
  width: '100px',
  padding: '12px',
  margin: '1em',
  background: 'blue',
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
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/medications"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Medications</NavLink>
    <NavLink
      to="/logon"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Logon</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Signup</NavLink>
  </div>;

  export default Navbar;