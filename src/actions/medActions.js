const fetchMeds = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_MEDS'})
    
      fetch('http://localhost:3000/medications').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_MEDS', medications: responseJSON.data })
      })
    }
  }

  export default fetchMeds;
 
