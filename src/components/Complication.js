const Complication = (props) => {
  console.log(props)
    return (
      <div key={props.complication.id}>
        <p>Description: {props.complication.complication_description}</p>
        <p>Severity: {props.complication.complication_severity}</p>
        <p>Duration: {props.complication.complication_duration}</p>
        <p>Resolved: {props.complication.completely_resolved.toString()}</p>
        <hr />
      </div>
    )
}

export default Complication;