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

export function pollEndRound(bracketId, polledRound) {
  return (dispatch, getState) => {
    let refresh = () => {
      // get the round we're in from the server
      getRound(bracketId)
        .then(roundData => {
          // if the round has advanced since we started polling and isn't over, we'll want to advance
          if (roundData.currentRound > getState().voting.currentRound && !roundData.results) {
            browserHistory.push(`/bracket/${bracketId}`);
          } else { // if it hasn't, update the votes and wait
            setTimeout(refresh, 10000);
            dispatch({ type: 'CHECK_ROUND', response: roundData });
          }
        })
    }
    refresh();
  }
}