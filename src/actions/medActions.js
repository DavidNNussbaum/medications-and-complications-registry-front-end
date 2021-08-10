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

export const editComplication = (complicationData, complicationId) => {
  return dispatch => {
    fetch(`http://localhost:3000/complications/${complicationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(complicationData)
    })
    .then(resp => resp.json())
    .then(complication => {
        dispatch({type: 'UPDATE_COMPLICATION', complication: complication.data.attributes})
    })
  }
}
export const createAComplication = (complicationData) => {
  return dispatch => {
    fetch('http://localhost:3000/complications', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(complicationData)
        })
        .then(resp => resp.json())
        .then(complication => {
          dispatch({type: 'CREATE_COMPLICATION', complication: complication.data.attributes})
        })} }

export const deleteAComplication = (complicationId) => {
  return dispatch => {
    fetch(`http://localhost:3000/complications/${complicationId}`, {
      method: "DELETE",
    })
    .then(complication => {
      dispatch({type: 'DELETE_COMPLICATION', complicationId: complicationId})
    })
  }
}

export default fetchMeds;
