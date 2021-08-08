const complicationsReducer = (state = { complications: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_COMPLICATIONS':
        return {
          ...state,
          complications: [...state.complications],
          loading: true
        }
       
        
      default:
        return state;
    }
  }
  
  export default complicationsReducer;
