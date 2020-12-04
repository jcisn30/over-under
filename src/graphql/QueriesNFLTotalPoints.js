import gql from 'graphql-tag'

export const NFLTotals = gql`
  query NFLTotals {
    totals
      @rest(
        type: "NFLTotalsPayload"
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

