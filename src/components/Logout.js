function Logout() {
    return (
    <div>
       <h1>This is logout.</h1>
    </div>
    )
}
     
export default Logout;

// import React from "react";
// import { connect } from "react-redux";
// import { logoutUser } from "../actions/auth";
// import { useHistory } from "react-router-dom";

// const Logout = ({ dispatchLogoutUser }) => {
//   const history = useHistory();
  
//   const handleClick = () => {
//     dispatchLogoutUser().then(() => history.push("/"));
//   };

//   const link = {
//     width: '100px',
//     height: '64px',
//     padding: '12px',
//     margin: '1em 0 2em',
//     background: 'blue',
//     textDecoration: 'none',
//     color: 'white',
//   }

//   return (
//     <a href="" style={link} onClick={handleClick}>Logout</a>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchLogoutUser: () => dispatch(logoutUser())
//   };
// };

// export default connect(null, mapDispatchToProps)(Logout);