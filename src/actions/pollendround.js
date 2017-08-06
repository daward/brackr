import { endpoint } from '../constants'
import rp from 'request-promise'
import browserHistory from '../history'

export function getRound(bracketId) {
  let options = {
    url: `${endpoint}/bracket/${bracketId}/round/current`,
    method: "GET"
  }
  return rp(options)
    .then(response => JSON.parse(response));
}

export function pollEndRound(bracketId, round) {
  return dispatch => {
    let refresh = () => {
      // get the round we're in
      getRound(bracketId)
        .then(roundData => {
          if (roundData.currentRound > round || !!roundData.results) { // the round has advanced, so should we
            browserHistory.push(`/bracket/${bracketId}`)
          } else { // if it hasn't, update the votes and wait
            setTimeout(refresh, 10000);
            dispatch({ type: 'CHECK_ROUND', response: roundData });
          }
        })
    }
    refresh();
  }
}