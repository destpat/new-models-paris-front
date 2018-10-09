import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import inforamtion from './components/register/step/information/reducer';

export default combineReducers({
  inforamtion,
  form: formReducer
})
