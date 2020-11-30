import gql from 'graphql-tag'

export const NFL = gql`
  query NFLOdds {
    odds
      @rest(
        type: "NFLPayload"
        path: "&sport=americanfootball_nfl&region=us&mkt=totals"
      ) {
      data @type(name: "DataPayload") {
        teams
        sites @type(name: "SitesPayload") {
          odds @type(name: "OddsPayload") {
            totals @type(name: "TotalsPayload"){
              points
            }
          }
        }
          
        
      }
      
    }
  }
`