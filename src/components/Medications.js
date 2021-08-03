import React, { PureComponent} from 'react';
import Medication from './Medication'
import ErrorPage from './ErrorPage'

class Medications extends PureComponent {
    state = {
        medication: null,
        selection: ''
    }
    medicationOptions = () => this.props.medList.map(medication => <option value={medication.id}>{medication.name_strength} </option>)
    handleChooseAMedication = (e) => {
        const medication = this.props.medList.find((medication) => medication.id === parseInt(e.target.value))
        this.setState({ medication })
       
    }
    render() {
        return (
            <h1>Medications</h1>
            // <>
            //     <select id='select-medication' onChange={this.handleChooseAMedication}>{this.medicationOptions()}</select>
            //    {!!this.state.medication ? <Medication {...this.state.medication}/> : <ErrorPage />} 
            // </>
        )
    }
}

    export default Medications;