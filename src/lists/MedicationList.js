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
      this.setState({
        medication: this.props.medications.find(medication => medication.id === event.target.value)
      })
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
            <ComplicationList complications={this.state.medication.attributes.complications} medicationId={this.state.medication.id} addNewComplication={this.props.addNewComplication}/>
          </>
        )}
      </>
    )
  }
}

export default MedicationList;
