import React, {useState} from "react";
import MedicationForm from '../forms/MedicationForm'


const CreateMedication = () => {
    const [showForm, setShowForm] = useState(false)
    const handleClick = () => {
         setShowForm(!showForm)
     }
     return (
        <>
            <button onClick={handleClick}>Add A New Medication</button>
            {showForm && <MedicationForm/>}
       </>
     )
}

export default CreateMedication;