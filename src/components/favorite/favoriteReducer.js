import {
  SET_FAVORITE_USER,
  REMOVE_FAVORITE_USER
} from './favoriteAction';

const initialState = {
  favoriteUsers: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE_USER:
      return {
        ...state,
        favoriteUsers: [
          ...state.favoriteUsers,
          action.payload.user
        ]
      }
    case REMOVE_FAVORITE_USER:
      return {
        ...state,
        favoriteUsers: state.favoriteUsers.filter(user => user.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default usersReducer
