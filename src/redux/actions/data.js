import * as type from '../types'

//nfl action
export function getNFLData(nfl) {
  return { 
    type: type.GET_NFL_DATA_REQUESTED,
  }
}


