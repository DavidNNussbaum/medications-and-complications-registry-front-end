const complicationsReducer = (state = { complications: [], loading: false }, action) => {
    switch(action.type) {
      case 'ADD_NEW_COMPLICATION':
        return {
          ...state,
          complications: [...state.complications, action.complication],
          loading: false
        }
        case 'DELETE_COMPLICATION':
          const complications = state.complications.filter(complication => complication.id !== action.complication.id)
          return {
            complications: complications,
            loading: false
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
