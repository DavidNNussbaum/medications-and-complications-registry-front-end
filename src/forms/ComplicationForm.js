import React, { Component }  from "react"

class ComplicationForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                complication_severity: "", 
                medication_id: props.medicationId,
                complication_duration: "",
                complication_description: "",
                completely_resolved: "",
            };
          }
          handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value
                 
            });
            console.log(this.state)
          };
    
          
        handleSubmit = (e) => {
            e.preventDefault()
            this.props.createComplication(this.state, this.props.currentUser.user.token)
            this.props.setShowForm(false)
    } 
    render() {
   return (
       <form onSubmit={this.handleSubmit}>
           <label htmlFor="complication_description">Description: </label>
           <input onChange={this.handleChange} name="complication_description" id="complication-description"    type="text"/>
           <label htmlFor="complication_severity">Severity (1-10): </label>
           <input onChange={this.handleChange} name="complication_severity" id="complication-severity" type="number"/>
           <label htmlFor="complication_duration">Duration: </label>
           <input onChange={this.handleChange} name="complication_duration" id="complication-duration" type="text"/>
           <input type="radio" onChange={this.handleChange} name="completely_resolved" value="true"/>
           <label htmlFor="true">Completely Resolved</label>
           <input type="radio" onChange={this.handleChange} name="completely_resolved" value="false"/>
           <label htmlFor="false">Not Completely Resolved</label>
           <input type="submit" value="Submit"/>
       </form>
   )
}}

export default ComplicationForm;

