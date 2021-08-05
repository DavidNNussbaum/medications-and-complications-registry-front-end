export const fetchMeds = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_MEDS'})
      debugger
      fetch('http://localhost:3000/medications').then(response => {
        return response.json()
      }).then(responseJSON => {
        debugger
        dispatch({ type: 'ADD_MEDS', medications: responseJSON.data })
      })
    }
  }

  // export default fetchMeds;
 
