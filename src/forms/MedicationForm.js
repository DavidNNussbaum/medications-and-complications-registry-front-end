import React, { Component } from "react"
import { connect } from 'react-redux';
import { createAMedication } from '../actions/medActions';
;
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
            if (!this.props.state.medications.error) {
                // this.props.setShowForm(false)
            } 
               
           
            
    }
render() {
   return (
       <form onSubmit={this.handleSubmit}>
           {this.props.state.medications.error && <p>{this.props.state.medications.error}</p>}
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

const mapStateToProps = state => {
    return {
        errors: state.medications.errors,
        state: state
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
         addNewMedication: medication => dispatch(createAMedication(medication)),
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MedicationForm);

 