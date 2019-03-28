import {
  CREATE_ENQUIRE,
  CREATE_ENQUIRE_SUCCESS
} from './favoriteAction'

// Our worker Saga: will perform the async increment task
import { call, put, takeEvery } from 'redux-saga/effects'
import { enquire } from '../../api/api'

export function* createEnquire(action) {
  try {
    yield call(enquire.request, action.payload.enquireInformations)
    yield put({ type: CREATE_ENQUIRE_SUCCESS})
  } catch (error) {
    console.log('Error lors de l\'envoie de la demande de renseignement');
  }
}

const favoriteSaga = [
  takeEvery(CREATE_ENQUIRE, createEnquire),
];

export default favoriteSaga;
