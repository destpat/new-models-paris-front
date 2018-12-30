// index.js
import registerSaga from './components/register/registerSaga';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all ([
    ...registerSaga,
  ])
}
