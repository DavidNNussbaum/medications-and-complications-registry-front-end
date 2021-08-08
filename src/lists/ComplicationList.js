import React, { Component} from 'react';
import Complication from '../components/Complication';
import CreateComplication from '../components/CreateComplication';

class ComplicationList extends Component {
  render() {
    return ( 
      <div>
        <h2>Complications</h2>
        {this.props.complications.map(complication => 
          <Complication complication={complication} />
        )}
          <CreateComplication medicationId={this.props.medicationId} addNewComplication={this.props.addNewComplication}/>
      </div>
    ) }
  }


export default ComplicationList;
