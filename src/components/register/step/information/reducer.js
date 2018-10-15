import {
  INCREMENTE
} from './action';

const initialState = {
  value: 1
}

const Information = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTE:
      return {
          ...state,
          value: state.value + 1
        }
    default:
      return state
  }
}

export default Information
