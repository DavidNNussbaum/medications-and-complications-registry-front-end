import complicationsReducer from './manageComplication'
import medicationsReducer from './manageMedications'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    complications: complicationsReducer,
    medications: medicationsReducer,
     
})
export default rootReducer