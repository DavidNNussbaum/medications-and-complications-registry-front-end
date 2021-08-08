const MedicationForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/medications', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                medication: {
                    name_strength: e.target.querySelector('#name-strength').value,
                    frequency: e.target.querySelector('#frequency').value,
                    administration_route: e.target.querySelector('#administration-route').value
                }
            })
          })
        .then(resp => resp.json())
        .then(medication => {
            props.addNewMed(medication.data)
            props.setShowForm(false)
        })

    }
   return (
       <form onSubmit={handleSubmit}>
           <label for="name_strength">Name/Strength: </label>
           <input name="name_strength" id="name-strength" type="text"/>
           <label for="frequency">Frequency: </label>
           <input name="frequency" id="frequency" type="text"/>
           <label for="administration_route">Administration Route: </label>
           <input name="administration_route" id="administration-route" type="text"/>
           <input type="submit" value="Submit"/>
       </form>
   )
}

export default MedicationForm;