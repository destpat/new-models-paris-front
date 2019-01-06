import {
  SIGNUP_REQUEST
} from './registerAction'

// Our worker Saga: will perform the async increment task
import { takeEvery } from 'redux-saga/effects'
// import { user } from '../../api/api'

export function* signUp(action) {
//   console.log('inside signup saga');
//   const { email, password } = action.payload;
//   try {
//     const signUp = yield call(Auth.signUp({
//       username: email.toLowerCase(),
//       password: password,
//       attributes: {
//           email
//       },
//     }))
//     console.log(signUp);
//     yield put({ type: SIGNUP_SUCCESS})
//   } catch (error) {
//     yield put({ type: SIGNUP_FAILURE, data: error})
//   }
}

const registerSaga = [
  takeEvery(SIGNUP_REQUEST, signUp),
];

export default registerSaga;
