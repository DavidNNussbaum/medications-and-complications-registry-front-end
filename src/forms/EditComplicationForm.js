import React, { Component} from "react"

class EditComplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complication_severity: this.props.complication.complication_severity,
            complication_duration: this.props.complication.complication_duration,
            complication_description: this.props.complication.complication_description,
            completely_resolved: this.props.complication.completely_resolved,
        };
      }
      handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
      };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateComplication(this.state, this.props.complication.id, this.props.currentUser.user.token)
        this.props.setShowForm(false)
    }
   render() {
   return (
       <form onSubmit={this.handleSubmit}>
           <label htmlFor="complication_description">Description: </label>
           <input name="complication_description" id="complication-description"    type="text" onChange={this.handleChange} value={this.state.complication_description} />
           <label htmlFor="complication_severity">Severity (1-10): </label>
           <input name="complication_severity" id="complication-severity" type="number" onChange={this.handleChange} value={this.state.complication_severity}/>
           <label htmlFor="complication_duration">Duration: </label>
           <input name="complication_duration" id="complication-duration" type="text" onChange={this.handleChange} value={this.state.complication_duration}/>
           <label htmlFor="completely_resolved">Completely Resolved (Yes or No): </label>
           <input name="completely_resolved" id="completely-resolved" type="boolean" onChange={this.handleChange} value={this.state.completely_resolved.toString()}/>
           <input type="submit" value="Submit"/>
       </form>
   )
    }
}

export default EditComplicationForm;


      

 