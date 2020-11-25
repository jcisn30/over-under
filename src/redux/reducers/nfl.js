import * as type from '../types'

//set initial state
const initialState = {
  nfl: [],
  loading: false,
  error: null
}

export default function jordan(state = initialState, action) {
  switch (action.type) {
    case type.GET_NFL_DATA_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_NFL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        nfl: action.nfl
      }
    case type.GET_NFL_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}