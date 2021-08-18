import React, { Component }  from "react"
import { connect } from 'react-redux';
import { createAComplication } from '../actions/medActions';

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
            console.log('complication form submitting: ', this.props.currentUser.user.token)
            this.props.createAComplication(this.state, this.props.currentUser.user.token)
            this.props.setShowForm(false)
    } 
    render() {
      console.log('complication form: ', this.props.currentUser.user.token)
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

const mapStateToProps = state => {
    return {
        currentUser: state.user
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
        createAComplication: (complication, token) => dispatch(createAComplication(complication, token)),
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ComplicationForm);

