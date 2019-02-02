// index.js
import { all } from 'redux-saga/effects'
import registerSaga from './components/register/registerSaga';
import usersSaga from './components/users/usersSaga';

export default function* rootSaga() {
  yield all ([
    ...registerSaga,
    ...usersSaga
  ])
}
