import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import fetchMeds from '../actions/medActions'
import MedicationList from '../lists/MedicationList'

class Medications extends PureComponent {
    componentDidMount() {
        this.props.fetchMeds()
      }
      
      handleLoading = () => {
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return (
           
                <MedicationList medications={this.props.medications.medications}/>
    
          )
        }
      }
    render() {
        return (
            <>
            <h1>Medications</h1>
            <div>
                {this.handleLoading()}
            </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
      medications: state.medications,
      loading: state.medications.loading
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {fetchMeds: () => dispatch(fetchMeds())}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Medications)