import {
  CREATE_USER_REQUEST
} from './registerAction'

// Our worker Saga: will perform the async increment task
import { put, call ,takeEvery } from 'redux-saga/effects'
import { user } from '../../api/api'

export function* createUser(action) {
  const createUser = yield call(user.createUser, action.payload);
  yield put({ type: 'CREATE_USER_SUCCESS', data: createUser})
}

const registerSaga = [
  takeEvery(CREATE_USER_REQUEST, createUser)
];

export default registerSaga;
