import {useState} from 'react'
import EditComplicationForm from '../forms/EditComplicationForm'

const Complication = (props) => {
  const handleClick = () => {
    props.deleteComplication(props.complication) 
    fetch(`http://localhost:3000/complications/${props.complication.id}`, {
            method: "DELETE",
  } ) }
  const [showForm, setShowForm] = useState(false)
  const handleEdit = () => {
       setShowForm(!showForm)
   }
    return (
      <div key={props.complication.id}>
        <p>Description: {props.complication.complication_description}</p>
        <p>Severity (1-10): {props.complication.complication_severity}</p>
        <p>Duration: {props.complication.complication_duration}</p>
        <p>Completely Resolved (Yes or No): {props.complication.completely_resolved.toString()}</p>
        <button onClick={handleEdit}>Edit This Complication</button>
        {showForm && <EditComplicationForm complication={props.complication} setShowForm={setShowForm} updateComplication={props.updateComplication}/>}
        <button onClick={handleClick}>Delete This Complication</button>
        <hr />
      </div>
    )
}

export default Complication;