import {
  CREATE_USER,
  CREATE_USER_SUCCESS
} from './registerAction'

// Our worker Saga: will perform the async increment task
import { call, put, takeEvery } from 'redux-saga/effects'
import { user } from '../../api/api'

export function* createUser(action) {
  try {
    console.log(action.payload.userInformation);
    yield call(user.createUser, action.payload.userInformation)
    yield put({ type: CREATE_USER_SUCCESS})
  } catch (error) {
    console.log('error lors de la création de l utilisateur');
  }
}

const registerSaga = [
  takeEvery(CREATE_USER, createUser),
];

export default registerSaga;
