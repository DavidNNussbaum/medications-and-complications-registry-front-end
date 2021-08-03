import complicationsReducer from './manageComplication'
import medicationsReducer from './manageMedications'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})
export default rootReducer