import React, { Component } from "react";
import MedicationList from "../lists/MedicationList";


class ComplicationssContainer extends Component {
     
    handleSubmit = (event) => {
            event.preventDefault();
            const { complication_severity, complication_duration, complication_description, completely_resolved } = this.state;
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
              ...this.state.complications,
              complication: this.props.value
            }))}>Add A Complication</button>
        </div>
      );
    }
  }
  
  export default ComplicationsContainer;