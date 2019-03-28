import {
  CREATE_ENQUIRE_SUCCESS,
  RESET_ENQUIRE,
  SET_ENQUIRE_MODE,
  SET_MOBILE_ENQUIRE_MODE
} from './favoriteAction';

const initialState = {
  createEnquireSuccess: false,
  enquireMode: false,
  mobileEnquireMode: false
}

const enquireReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE_ENQUIRE_MODE:
      return {
        ...state,
        mobileEnquireMode: action.payload.enquire
      }
    case SET_ENQUIRE_MODE:
      return {
        ...state,
        enquireMode: action.payload.enquire
      }
    case CREATE_ENQUIRE_SUCCESS:
      return {
        ...state,
        createEnquireSuccess: true
      }
    case RESET_ENQUIRE:
      return {
        ...state,
        createEnquireSuccess: false,
        enquireMode: false,
        mobileEnquireMode: false
      }
    default:
      return state
  }
}

export default enquireReducer
