import {
  FETCHING_PUBLIC_USERS,
  GET_PUBLIC_USERS,
  GET_PUBLIC_USERS_SUCCESS
} from './usersAction'

// Our worker Saga: will perform the async increment task
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { user as userCall, s3 } from '../../api/api'

export function* getPublicUsers(action) {
  try {
    yield put({type: FETCHING_PUBLIC_USERS})

    let users = yield call(userCall.getPublicUsers, action.payload.sex)

    let photos =  yield all(users.map((user) => {
      return call(s3.getImage, user.photos[0])
    }))
    users = users.map((user,index) => {
      return {
        ...user,
        photo: photos[index]
      }
    })
    yield put({ type: GET_PUBLIC_USERS_SUCCESS, data: users })
  } catch (error) {
    console.log(error);
    console.log('error lors de la création de l utilisateur');
  }
}

const registerSaga = [
  takeEvery(GET_PUBLIC_USERS, getPublicUsers),
];

export default registerSaga;
