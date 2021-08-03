const fetchMeds = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_MEDS'})
      fetch('http://localhost:3000/medications').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_MEDS', meds: responseJSON.medications })
      })
    }
  }

  export default fetchMeds;
 