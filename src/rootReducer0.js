import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import registerReducer from './components/register/registerReducer'

export default combineReducers({
  register: registerReducer,
  form: formReducer
})
