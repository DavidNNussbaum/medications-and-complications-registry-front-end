import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import fetchMeds from '../actions/medActions';
import MedicationList from '../lists/MedicationList';
import LoadingIndicator from './LoadingIndicator';
import ErrorPage from './ErrorPage';
import CreateMedication from './CreateMedication'

class Medications extends PureComponent {
    componentDidMount() {
        this.props.fetchMeds()
      }
      
      handleLoading = () => {
        if(this.props.loading) {
          return < LoadingIndicator />
        } else {
          return (
            <MedicationList medications={this.props.medications.medications} addNewComplication={this.props.addNewComplication} addComplications={this.props.addComplications} complications={this.props.complications.complications} deleteComplication={this.props.deleteComplication} updateComplication={this.props.updateComplication}/>
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
          <CreateMedication addNewMedication={this.props.addNewMedication}/>
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
        addNewMedication: medication => dispatch({type: 'ADD_NEW_MED', medication}),
        addNewComplication: complication => dispatch({type: 'ADD_NEW_COMPLICATION', 
        complication}),
        addComplications: complications => dispatch({type: 'ADD_COMPLICATIONS', 
        complications}),
        deleteComplication: complication => dispatch({type: 'DELETE_COMPLICATION', complication}),
        updateComplication: complication => dispatch({type: 'UPDATE_COMPLICATION', complication})
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Medications)