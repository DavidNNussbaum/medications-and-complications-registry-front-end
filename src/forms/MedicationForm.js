import React, { Component } from "react"

class MedicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name_strength: "", 
            frequency: "",
            administration_route: "",
        };
      }
      handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
             
        });
      };

    handleSubmit = (e) => {
        e.preventDefault()
            this.props.addNewMedication(this.state)
                this.props.setShowForm(false)
           
            
    }
render() {
   return (
       <form onSubmit={this.handleSubmit}>
           <label for="name_strength">Name/Strength: </label>
           <input onChange={this.handleChange} name="name_strength" id="name-strength" type="text"/>
           <label for="frequency">Frequency: </label>
           <input onChange={this.handleChange} name="frequency" id="frequency" type="text"/>
           <label for="administration_route">Administration Route: </label>
           <input onChange={this.handleChange} name="administration_route" id="administration-route" type="text"/>
           <input type="submit" value="Submit"/>
       </form>
   )
}
}

export default MedicationForm;