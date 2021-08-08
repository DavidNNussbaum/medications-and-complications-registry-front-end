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
      const selectedMedication = this.props.medications.find(medication => medication.id === event.target.value)
      this.setState({
        medication: selectedMedication
      })
      this.props.addComplications(selectedMedication.attributes.complications)
    }
    return (
      <>
        <select onChange={handleChange}>
          <option>Select A Medication</option>
          {this.props.medications.map(medication => 
            <option key={medication.id} value={medication.id}>{medication.attributes.name_strength}</option>
            )}
        </select>
        {this.state.medication && (
          <>
          < Medication medication={this.state.medication.attributes} />
            <ComplicationList complications={this.props.complications} medicationId={this.state.medication.id} addNewComplication={this.props.addNewComplication} deleteComplication={this.props.deleteComplication}/>
          </>
        )}
      </>
    )
  }
}

export default MedicationList;
