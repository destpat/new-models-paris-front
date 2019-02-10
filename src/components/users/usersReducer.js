import {
  GET_PUBLIC_USERS_SUCCESS,
  GET_PUBLIC_USER_SUCCESS,
  FETCHING_PUBLIC_USER,
  FETCHING_PUBLIC_USERS
} from './usersAction';

const initialState = {
  publicUsers: [],
  currentPublicUser: {},
  fetchingPublicUser: true,
  fetchingPublicUsers: true
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PUBLIC_USERS:
      return {
        ...state,
        fetchingPublicUsers: true
      }
    case GET_PUBLIC_USERS_SUCCESS:
      return {
        ...state,
        publicUsers: action.data,
        fetchingPublicUsers: false
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
