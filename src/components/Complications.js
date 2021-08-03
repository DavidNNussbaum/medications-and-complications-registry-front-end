import React, { PureComponent} from 'react';
import Complication from './Complication'

class Complications extends PureComponent {
    state = {
        complication: null,
        selection: ''
    }
     
    render() {
        return (
            <>
               {!!this.state.complication ? <Complication {...this.state.complication}/>} 
            </>
        )
    }
}

    export default Complications;