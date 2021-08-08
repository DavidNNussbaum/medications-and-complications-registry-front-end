const ComplicationForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/complications', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                complication: {
                    complication_severity: e.target.querySelector('#complication-severity').value,
                    complication_duration: e.target.querySelector('#complication-duration').value,
                    complication_description: e.target.querySelector('#complication-description').value,
                    completely_resolved: e.target.querySelector('#completely-resolved').value,
                    medication_id: props.medicationId
                }
            })
          })
          .then(resp => resp.json())
          .then(complication => {
              props.addNewComplication(complication.data.attributes)
              props.setShowForm(false)
          })
        

    }
   return (
       <form onSubmit={handleSubmit}>
           <label for="complication_description">Description: </label>
           <input name="complication_description" id="complication-description"    type="text"/>
           <label for="complication_severity">Severity (1-10): </label>
           <input name="complication_severity" id="complication-severity" type="number"/>
           <label for="complication_duration">Duration: </label>
           <input name="complication_duration" id="complication-duration" type="text"/>
           <label for="completely_resolved">Completely Resolved (Yes or No): </label>
           <input name="completely_resolved" id="completely-resolved" type="boolean"/>
           <input type="submit" value="Submit"/>
       </form>
   )
}

export default ComplicationForm;

