import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import fetchMeds from '../actions/medActions';
import MedicationList from '../lists/MedicationList';
import LoadingIndicator from './LoadingIndicator';
import ErrorPage from './ErrorPage';
import CreateMedication from './CreateMedication'
import { editComplication, createAComplication, deleteAComplication, createAMedication } from '../actions/medActions'


class Medications extends PureComponent {
    componentDidMount() {
        this.props.fetchMeds()
      }
      
      handleLoading = () => {
        if(this.props.loading) {
          return < LoadingIndicator />
        } else {
          return (
            <MedicationList medications={this.props.medications.medications}  addComplications={this.props.addComplications} complications={this.props.complications.complications} deleteComplication={this.props.deleteComplication} updateComplication={this.props.updateComplication} createComplication={this.props.createComplication} currentUser={this.props.currentUser}/>
          )
        }
      }
    render() {
      if (!!this.props.loading) {
        return <LoadingIndicator/>
      }
  
      if (!!this.props.error) {
        return <ErrorPage error={this.props.error} />
      }
        return (
            <>
            <h1>Medications</h1>
            <div>
            { this.props.currentUser.user && (
          <CreateMedication addNewMedication={this.props.addNewMedication}/>
            )}
                {this.handleLoading()}
            </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
      medications: state.medications,
      complications: state.complications,
      loading: state.medications.loading
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
        fetchMeds: () => dispatch(fetchMeds()),
        addNewMedication: medicationData => dispatch(createAMedication(medicationData)),
        createComplication: (complication, token) => dispatch(createAComplication(complication, token)),
        addComplications: complications => dispatch({type: 'ADD_COMPLICATIONS', 
        complications}),
        deleteComplication: (complicationId, token) => dispatch(deleteAComplication(complicationId, token)),
        updateComplication: (complication, complicationId, token) => dispatch(editComplication(complication, complicationId, token))
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Medications)