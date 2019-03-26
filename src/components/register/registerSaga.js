import {
  CREATE_USER,
  CREATE_USER_SUCCESS
} from './registerAction'

// Our worker Saga: will perform the async increment task
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { user } from '../../api/api'

export function* createUser(action) {
  try {
    let photos =  yield all(action.payload.userInformation.photos.map((photo) => {
      return call(user.uploadPhoto, {base64: photo.base64, id: action.payload.userInformation.id})
    }))

    yield call(user.createUser, {
      ...action.payload.userInformation,
      photos
    })
    yield put({ type: CREATE_USER_SUCCESS})
  } catch (error) {
    console.log('error lors de la création de l utilisateur');
  }
}

const registerSaga = [
  takeEvery(CREATE_USER, createUser),
];

export default registerSaga;
