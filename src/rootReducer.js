import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import registerReducer from './components/register/registerReducer'
import usersReducer from './components/users/usersReducer'
import favoritesReducer from './components/favorite/favoriteReducer'

export default combineReducers({
  register: registerReducer,
  users: usersReducer,
  favorites: favoritesReducer,
  form: formReducer
})
