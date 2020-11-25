import { all } from 'redux-saga/effects'
import nflSaga from './nflSaga'


//create rootSaga so multiple sagas can be created and called
export default function* rootSaga() {
  yield all([
    nflSaga(),
  ])
}