import React, { Component } from 'react';

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
            <h1>Complications</h1>
            {this.state.medication.attributes.complications.map(complication => 
                  <div key={complication.id}>
                    <p>Description: {complication.complication_description}</p>
                    <p>Severity: {complication.complication_severity}</p>
                    <p>Duration: {complication.complication_duration}</p>
                    <p>Resolved: {complication.completely_resolved.toString()}</p>
                    <hr />
                  </div>
            )}
          </>
        )}
      </>
    )
  }
}

export default MedicationList;
