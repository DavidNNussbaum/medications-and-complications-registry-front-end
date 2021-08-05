import React, { PureComponent} from 'react';
import Medication from './Medication'
import ErrorPage from './ErrorPage'

class Medications extends PureComponent {
    listMedications = () => {
        console.log(this.props)
        return this.props.medications.map(med => <h1>{med.id}</h1>)
    }
    // state = {
    //     medications: null,
    //     selection: ''
    // }
    // medicationOptions = () => this.props.medList.map(medication => <option value={medication.id}>{medication.name_strength} </option>)
    // handleChooseAMedication = (e) => {
    //     const medication = this.props.medList.find((medication) => medication.id === parseInt(e.target.value))
    //     this.setState({ medication })
       
    // }
    render() {
        return (
            <>
            <h1>Medications</h1>
            <div>
                {this.listMedications()}
            </div>
            </>
            // <>
            //     <select id='select-medication' onChange={this.handleChooseAMedication}>{this.medicationOptions()}</select>
            //    {!!this.state.medication ? <Medication {...this.state.medication}/> : <ErrorPage />} 
            // </>
        )
    }
}

    export default Medications;