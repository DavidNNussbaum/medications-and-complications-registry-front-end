import React, {Component} from 'react';
import './App.css';
import Medications from './Medications';
import Navbar from "./Navbar";
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ComplicationsList from '../containerss/ComplicationsContainer';
import UsersList from '../components/Users';
import fetchMeds from '../actions/medActions'
import { render } from '@testing-library/react';

class App extends Component {
  componentDidMount() {
    this.props.fetchMedications()
  }
  
  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return (
      <MedicationList medList={this.props.medList} />
      <ComplicationList compList={this.props.compList} />
      )
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Medications</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    medList: state.medications,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchMeds })(App)


//   -------------------------------------------------
//   componentDidMount() {
//     return (
//       fetch('http://localhost:3000/medications')
//       .then(resp => resp.json())
//       .then(json => {
//         const complications = []
//         const medications = []
//         json.data.map(medObj => {
//           complications.push(medObj.attributes.complications)
//           medications.push({name_strength: medObj.attributes. name_strength
// , frequency: medObj.attributes.frequency, administrationRoute: medObj.attributes. administration_route, id: medObj.id} ) 
//         })
 
//         this.setState({
//           medicationsList: medications,
//           complicationsList: complications.flat()
//         })
//       })
//       .catch(err => console.error(err))
//     )}
      
//   render() {
//   return (
//     <>
     
//     <div className="navbar">
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} /> 
//         <Route path="/medications" render={(props) => <Medications medicationsList={this.state.medicationsList} complicationsList={this.state.complicationsList} routeProps={props} /> }/>
//         <Route path="`/medications/${medication_id}`" render={(props) => <Medication medication={medication.id === e.target.value complication={complication.medication_id === medication.id}} />
//         {/* <Route path="/logon" component={Logon}/> 
//         <Route path="/signup" component={Signup}/>
//         <Route path="/logoff" component={Logoff}/> */}
//       </Switch>
//     </Router>
//   </div>
//   </>
//   );
// }
// }

// const mapStateToProps = state => {
//   return {
//     catPics: state.cats,
//     loading: state.loading
//   }
// }

// export default connect(mapStateToProps, { fetchCats })(App)


// export default App;


