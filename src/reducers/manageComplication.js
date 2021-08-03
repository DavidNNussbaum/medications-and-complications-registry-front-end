const complicationsReducer = (state = { complications: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_COMPLICATIONS':
        return {
          ...state,
          complications: [...state.complications],
          loading: true
        }
      case 'ADD_COMPLICATIONS':
        return {
          ...state,
          complications: action.complications,
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default complicationsReducer;
