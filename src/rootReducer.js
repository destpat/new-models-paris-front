import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Information from './components/register/step/information/reducer';

export default combineReducers({
  Information,
  form: formReducer
})
