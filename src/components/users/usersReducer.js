import {
  GET_PUBLIC_USERS_SUCCESS
} from './usersAction';

const initialState = {
  publicUsers: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLIC_USERS_SUCCESS:
      return {
        ...state,
        publicUsers: action.data
      }
    default:
      return state
  }
}

export default usersReducer
