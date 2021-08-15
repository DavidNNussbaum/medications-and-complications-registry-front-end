const userReducer = (state = { user: {}, authChecked: false, loggedIn: false}, action) => {
    switch(action.type) {
      case 'SET_USER':

        return {
          authChecked: true, 
          loggedIn: true,
          user: action.user,
        }

    case 'LOGOUT_USER':
      return {
        authChecked: true, 
        loggedIn: false,
        user: {},
      }  
      default:
        return state;
    }
  }
  
  export default userReducer;




 