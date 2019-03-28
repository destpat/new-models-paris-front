import {
  SET_FAVORITE_USER,
  REMOVE_FAVORITE_USER,
  CREATE_ENQUIRE_SUCCESS,
} from './favoriteAction';

const initialState = {
  favoriteUsers: [],
  createEnquireSuccess: false
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ENQUIRE_SUCCESS:
      return {
        ...state,
        createEnquireSuccess: true
      }
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

export default favoriteReducer
