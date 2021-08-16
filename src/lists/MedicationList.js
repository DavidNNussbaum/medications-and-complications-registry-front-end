import React, { Component } from 'react';
import Medication from '../components/Medication';
import ComplicationList from './ComplicationList'

class MedicationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      medication: undefined
    }
    
  }
   
  render() {
    const handleChange = (event) => {
      if (event.target.value === "0") {
        this.setState({
          medication: null
        })
      } else {
        const selectedMedication = this.props.medications.find(medication => medication.id === event.target.value)
        this.setState({
          medication: selectedMedication
        })
        this.props.addComplications(selectedMedication.attributes.complications)
      }
    }
    return (
      <>
        <select onChange={handleChange}>
          <option id="select-med-button" value="0">Select A Medication</option>
          {this.props.medications.map(medication => 
            <option key={medication.id} value={medication.id}>{medication.attributes.name_strength}</option>
            )}
        </select>
        {this.state.medication && (
          <>
            < Medication medication={this.state.medication.attributes} />
            <ComplicationList complications={this.props.complications} medicationId={this.state.medication.id} addNewComplication={this.props.addNewComplication} deleteComplication={this.props.deleteComplication} updateComplication={this.props.updateComplication} createComplication={this.props.createComplication} currentUser={this.props.currentUser}/>
          </>
        )}
      </>
    )
  }
}

export default MedicationList;
