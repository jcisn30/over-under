import gql from 'graphql-tag'

export const NFLSpreads = gql`
  query NFLSpreads {
    spreads
      @rest(
        type: "NFLSpreadsPayload"
        path: "&sport=americanfootball_nfl&region=us&mkt=spreads"
      ) {
      data @type(name: "DataPayload") {
        teams
        sites @type(name: "SitesPayload") {
          odds @type(name: "OddsPayload") {
            spreads @type(name: "TotalsPayload"){
              points
            }
          }
        }
          
        
      }
      
    }
  }
`