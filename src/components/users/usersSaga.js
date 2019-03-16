import {
  FETCHING_PUBLIC_USERS,
  GET_PUBLIC_USERS,
  GET_PUBLIC_USERS_SUCCESS,
  FETCHING_PUBLIC_USER,
  GET_PUBLIC_USER,
  GET_PUBLIC_USER_SUCCESS
} from './usersAction'

// Our worker Saga: will perform the async increment task
import { call, put, takeEvery } from 'redux-saga/effects'
import { user as userCall } from '../../api/api'

export function* getPublicUsers(action) {
  try {
    yield put({type: FETCHING_PUBLIC_USERS})
    let users = yield call(userCall.getPublicUsers, action.payload.sex)
    console.log(users);
    yield put({ type: GET_PUBLIC_USERS_SUCCESS, data: users })
  } catch (error) {
    console.log(error);
    console.log('error lors de la création de l utilisateur');
  }
}

function* getPublicUser(action) {
  try {
    yield put({ type: FETCHING_PUBLIC_USER })
    let user = yield call(userCall.getPublicUser, action.payload.id)
    yield put({ type: GET_PUBLIC_USER_SUCCESS, data: user })
  } catch (error) {
    console.log(error);
    console.log(`erreur lors de la récupération de l'utilisateur avec l'id`);
  }
}

const registerSaga = [
  takeEvery(GET_PUBLIC_USERS, getPublicUsers),
  takeEvery(GET_PUBLIC_USER, getPublicUser),
];

export default registerSaga;
