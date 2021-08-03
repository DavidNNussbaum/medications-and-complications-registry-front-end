import React, {Component} from 'react';
import { connect } from 'react-redux';
import { render } from '@testing-library/react';
import '../App.css';
import Medications from './Medications';
import Navbar from "./Navbar";
import Home from './Home';
import Logon from './Logon';
import Signup from './Signup';
// import MedicationList from './lists/MedicationList';
// import ComplicationList from './lists/ComplicationList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ComplicationsList from '../containers/ComplicationsContainer';
import fetchMeds from '../actions/medActions'


class App extends Component {
  componentDidMount() {
    this.props.fetchMeds()
  }
  
  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return (
      <>
      {/* <MedicationList medList={this.props.medList} />
      <ComplicationList compList={this.props.compList} /> */}
      </>
      )
    }
  }

  render() {
    return (
          <>
           
          <div className="navbar">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/medications" component={Medications}/>
              {/* <Route path="/medications" render={(props) => <Medications medicationsList={this.state.medicationsList} complicationsList={this.state.complicationsList} routeProps={props} /> }/> */}
              {/* <Route path="`/medications/${medication_id}`" render={(props) => <Medication medication={medication.id === e.target.value} complication={complication.medication_id === medication.id} } /> */}
              <Route path="/logon" component={Logon}/> 
              <Route path="/signup" component={Signup}/>
            </Switch>
          </Router>
        </div>
        </>
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


