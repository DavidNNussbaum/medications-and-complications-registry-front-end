import React, { Component } from 'react';
 
class Medication extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
          <h1>Medication</h1>
                    <p>Name/Strength: {this.props.medication.name_strength}</p>
                    <p>Frequency: {this.props.medication.frequency}</p>
                    <p>Administration Route: {this.props.medication.administration_route}</p>
                    <hr />
      </div>
    );
  }
};

export default Medication;





// import Complications from './Complications'

// function Medication({name, frequency, route, complications}) {

//    return(
//        <div>
//          <h1>{name}</h1>
//          <h3>{frequency}</h3>
//          <h3>{route}</h3>
//        </div>
   
//    )
// }
// export default Medication;

 
// class Medication {
//   static all = []
   
//   constructor({name_strength, frequency, administration_route, id}){
//       this.name_strength = name_strength
//       this.frequency = frequency
//       this.administration_route = administration_route
//       this.id = id
//       Medication.all.push(this)
//   }

//   static getAll() {

//       return this.all
//   }

//   static findById(id) {
//       return this.all.find(medication => medication.id === id)
//   }

//   static findOrCreateBy(medicationObj) {
//       return this.findById(medicationObj.id) || new Medication(medicationObj)
//   }

//   render() {
//       ul().innerHTML += "<h1 id='medications-header'>Medications</h1>"
//       this.all.forEach(med => this.renderMedication(med))
//   }

//   static renderMedicationsInDropdown = (medications) => {
//       let select, refresh
//       if (document.querySelector("#medication-dropdown")) {
//           refresh = true
//           select = document.querySelector("#medication-dropdown")
//           select.innerHTML = ""
//       } else {
//           refresh = false
//           select = document.createElement("select")
//           select.id = "medication-dropdown"
//       }
//       const option = document.createElement("option")
//       option.innerText = "Press To Choose A Medication"
//           select.add(option)
//       medications.forEach(medication => {
//           const option = document.createElement("option")
//           option.value = medication.id
//           option.innerText = `${medication.name_strength}`
//           select.add(option)
//       })
//       if (!refresh) {
//           if (localStorage.getItem('user_id') !== null) {
//               const newMedicationButton = document.createElement("button")
//               newMedicationButton.id = "new-medication-button" 
//               newMedicationButton.innerText = "Create a New Medication"
//               ul().appendChild(newMedicationButton)
//               const br = document.createElement("br")
//               ul().appendChild(br)
//               newMedicationButton.addEventListener('click', this.displayForm)
//       }
//  }
//        ul().appendChild(select)
       
//        select.addEventListener("change", this.handleMedicationDropdownChange)
// }

//  renderMedications = (medications) => {
//   ul().innerHTML += "<h1 id='medications-header'>Medications</h1>"
//   renderMedicationsInDropdown(medications.data)
// }
//  static handleMedicationDropdownChange = (e) => {
//   if (document.querySelector(".medication-container")) {
//   document.querySelector(".medication-container").remove()
// }
//   const medId = e.target.value
//   const div = document.createElement("div")
//   div.classList.add("medication-container")
//   div.id = `medication-${medId}`
//   ul().appendChild(div)
//   if (localStorage.getItem("user_id") != null) {
//       const newComplicationButton = document.createElement("button")
//       newComplicationButton.innerText = "Add A Complication"
//       newComplicationButton.dataset.medId = medId
//       newComplicationButton.id = 'new-complication-button'
//       div.appendChild(newComplicationButton)
//       newComplicationButton.addEventListener("click", Complication.displayForm)
//   }
//   actions/medActions.js    fetchMeds(medId)
//  }

//  static displayForm = () => {
//   if (!medicationForm()) {
//       ul().insertAdjacentHTML('afterend', `
//       <form id="medication-form">
          
//           <h3>Add New Medication:</h3>
//           <label for="medication-nameStrength">Medication's Name-strength: </label>
//           <input type="text" name="medication-nameStrength" id="medication-nameStrength"><br><br>
//           <label for="medication-frequency">Medication Frequency: </label>
//           <input type="text" name="medication-frequency" id="medication-frequency"><br><br>
//           <label for="medication-administrationRoute">Medication Administration Route: </label>
//           <input type="text" name="medication-administrationRoute" id="Medication-administrationRoute"><br><br>
//           <input type="submit" value="Create">
//       </form>
//       `)
//       document.getElementById("medication-form").addEventListener("submit", Medication.handleSubmit)
       
//   } else {
//       medicationForm().remove()
//   }
// }


