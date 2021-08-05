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
    <NavLink
      to="/medications"
      exact
      style={link}
      activeStyle={{
        background: 'black'
      }}
    >Medications</NavLink>
    <NavLink
      to="/logon"
      exact
      style={link}
      activeStyle={{
        background: 'black'
      }}
    >Logon</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'black'
      }}
    >Signup</NavLink>
  </div>;

  export default Navbar;