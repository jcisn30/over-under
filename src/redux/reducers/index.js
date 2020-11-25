import { combineReducers } from 'redux'
import nfl from './nfl'

//combine reducers
const rootReducer = combineReducers({
  nfl:nfl
});

export default rootReducer;