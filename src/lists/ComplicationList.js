import React, { Component } from 'react';

class ComplicationList extends Component {
  compList = () => {
    return this.props.compList.map(comp => <ComplicationsContainer key={comp.id} severity={comp.complication_severity} duration={comp.complication_duration} description={comp.complication_description} resolved={completely_resolved} />)
  }

  render() {
    return (
      <div>
        {this.listComplications()}
      </div>
    )
  }
}

export default ComplicationList;
