import React, { Component } from "react";
import MedicationList from "../lists/MedicationList";


class MedicationsContainer extends Component {

    handleSubmit = (event) => {
            event.preventDefault();
            const { name_strength, frequency, administration_route } = this.state;
            this.props
              .dispatchLoginUser({ email, password })
              .then(() => this.props.history.push("/"))
              .catch(() => this.setState({ error: true }));
          };
    render() {
      const { handleSubmit } = this.props;
      return (
        <div>
          <button onClick={handleSubmit(values => 
            this.props.onSubmit({ 
              ...this.state.medications,
              medication: this.props.value
            }))}>Add A Medication</button>
        </div>
      );
    }
  }
  
  export default MedicationsContainer;