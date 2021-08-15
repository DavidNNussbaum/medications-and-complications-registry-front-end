import Complication from '../components/Complication';
import CreateComplication from '../components/CreateComplication';

const ComplicationList = () => {
    return ( 
      <div>
        {this.props.complications.length > 0 && <h2>Complications</h2>}
        {this.props.complications.length === 0 && <h2>There are currently no complications listed for this medication.</h2>}
        {this.props.complications.map(complication => 
          <Complication key={complication.id} complication={complication} deleteComplication={this.props.deleteComplication} updateComplication={this.props.updateComplication} currentUser={this.props.currentUser}/>
        )}
        { this.props.currentUser.user && (
          <CreateComplication medicationId={this.props.medicationId} createComplication={this.props.createComplication} currentUser={this.props.currentUser}/>) }
      </div>
    ) 
  }
  


export default ComplicationList;
