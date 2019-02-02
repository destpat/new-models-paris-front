import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import registerReducer from './components/register/registerReducer'
import usersReducer from './components/users/usersReducer'

export default combineReducers({
  register: registerReducer,
  users: usersReducer,
  form: formReducer
})
