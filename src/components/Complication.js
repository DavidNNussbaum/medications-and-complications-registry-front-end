const Complication = (props) => {
  console.log(props)
    return (
      <div key={props.complication.id}>
        <p>Description: {props.complication.complication_description}</p>
        <p>Severity (1-10): {props.complication.complication_severity}</p>
        <p>Duration: {props.complication.complication_duration}</p>
        <p>Completely Resolved (Yes or No): {props.complication.completely_resolved.toString()}</p>
        <hr />
      </div>
    )
}

export default Complication;