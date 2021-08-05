const medicationsReducer = (state = { medications: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_MEDICATIONS':
        return {
          ...state,
          medications: [...state.medications],
          loading: true
        }
      case 'ADD_MEDS':
        return {
          ...state,
          medications: action.medications,
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default medicationsReducer;




 