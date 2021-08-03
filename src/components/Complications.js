import React, { PureComponent} from 'react';
import Complication from './Complication';
import ErrorPage from './ErrorPage';

class Complications extends PureComponent {
    state = {
        complication: null,
        selection: ''
    }
     
    render() {
        return (
            <>
               {!!this.state.complication ? <Complication {...this.state.complication} />: <ErrorPage />} 
            </>
        )
    }
}

export default Complications;