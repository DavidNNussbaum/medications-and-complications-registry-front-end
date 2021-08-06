import React, { Component} from 'react';
import Complication from '../components/Complication';

class ComplicationList extends Component {
  render() {
    return ( 
      <div>
        <h2>Complications</h2>
        {this.props.complications.map(complication => 
          <Complication complication={complication} />
        )}
      </div>
    ) }
  }


export default ComplicationList;
