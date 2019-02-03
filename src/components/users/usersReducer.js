import {
  GET_PUBLIC_USERS_SUCCESS,
  GET_PUBLIC_USER_SUCCESS,
  FETCHING_PUBLIC_USER
} from './usersAction';

const initialState = {
  publicUsers: [],
  currentPublicUser: {},
  fetchingPublicUser: true
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLIC_USERS_SUCCESS:
      return {
        ...state,
        publicUsers: action.data
      }
    case FETCHING_PUBLIC_USER:
      return {
        ...state,
        fetchingPublicUser: true
      }
    case GET_PUBLIC_USER_SUCCESS:
      return {
        ...state,
        currentPublicUser: action.data,
        fetchingPublicUser: false
      }
    default:
      return state
  }
}

export default usersReducer
