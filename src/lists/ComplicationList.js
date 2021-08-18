import Complication from '../components/Complication';
import CreateComplication from '../components/CreateComplication';

const ComplicationList = (props) => {
  console.log('complication list props: ', props)
    return ( 
      <div>
        {props.complications.length > 0 && <h2>Complications</h2>}
        {props.complications.length === 0 && <h2>There are currently no complications listed for this medication.</h2>}
        {props.complications.map(complication => 
          <Complication key={complication.id} complication={complication} deleteComplication={props.deleteComplication} updateComplication={props.updateComplication} currentUser={props.currentUser}/>
        )}
        {props.currentUser.user && (
          <CreateComplication medicationId={props.medicationId}/>) }
      </div>
    ) 
  }
  


export default ComplicationList;
