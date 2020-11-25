import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

//api url for jordans best season stats
const apiUrl = `https://api.the-odds-api.com/v3/odds/?apiKey=249a786aece64541e56cf2607d2d7f86&sport=americanfootball_nfl&region=us&mkt=totals`;

//fetch apiUrl JSON data
function getApi() {
  return fetch(apiUrl,  {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  }).then(response => response.json())
   
    .catch((error) => {throw error})
}





// NFL Saga will be fired on Get_NFL_DATA_REQUESTED actions
function* fetchNFLData(action) {
   try {
      const nfl = yield call(getApi);
      // console.log(nfl.data[0])
      yield put({type: 'GET_NFL_DATA_SUCCESS', nfl:nfl});
   } catch (e) {
      yield put({type: 'GET_NFL_DATA_FAILED', message: e.message});
   }
}



/*
  Starts fetchNFLData on each dispatched `GET_NFL_DATA_REQUESTED` action.
  Allows concurrent fetches of data.
*/
function* nflSaga() {
   yield takeEvery('GET_NFL_DATA_REQUESTED', fetchNFLData);
   
}

export default nflSaga;
