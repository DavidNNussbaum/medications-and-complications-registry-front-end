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
      case 'ADD_NEW_MED':
        return {
          ...state,
          medications: [...state.medications, action.medication],
          loading: false
        }
        case 'ADD_NEW_COMP':
          // const index = state.todos.findIndex(todo => String(todo.id) === String(action.payload.id))
          //   return !!index || index === 0 ? (
          //       {...state, todos: [
          //           ...state.todos.slice(0, index), 
          //           action.payload,
          //           ...state.todos.slice(index + 1)
          //       ], error: "", loading: false} 
          //   ): state
          const index = state.medications.findIndex(medication => String(medication.id) === String(action.medication.id))
          // const medications = state.medications.filter(medication => medication.id !== action.medication.id)
          // const medications = state.medications.map(medication => {
          //   if (medication.id === action.medication.id) {
          //     return action.medication
          //   } else {
          //     return medication
          //   }
          // })
            return !!index || index === 0 ? (
                {...state, medications: [
                    ...state.medications.slice(0, index), 
                    action.medication,
                    ...state.medications.slice(index + 1)
                ], loading: false} 
            ): state
        // return {
        //   ...state,
        //   medications: [...medications],
        //   loading: false
        // }
      default:
        return state;
    }
  }
  
  export default medicationsReducer;




 