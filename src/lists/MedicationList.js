import React, { Component } from 'react';

class MedicationList extends Component {
  medList = () => {
    return this.props.medList.map(med => <MedicationsContainer key={med.id} name={med.name_strength} frequency={med.frequency} route={med.administration_route} />)
  }

  render() {
    return (
      <div>
        {this.listMeds()}
      </div>
    )
  }
}

export default MedicationList;
