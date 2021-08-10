import React, { Component} from 'react';
import Complication from '../components/Complication';
import CreateComplication from '../components/CreateComplication';

class ComplicationList extends Component {
  render() {
    return ( 
      <div>
        <h2>Complications</h2>
        {this.props.complications.map(complication => 
          <Complication key={complication.id} complication={complication} deleteComplication={this.props.deleteComplication} updateComplication={this.props.updateComplication}/>
        )}
          <CreateComplication medicationId={this.props.medicationId} createComplication={this.props.createComplication}/>
      </div>
    ) }
  }


export default ComplicationList;
