import browserHistory from '../history'
import bracketClient from '../clients/bracketclient'

export function pollEndRound({ bracketId, polledRound, userId }) {
  return (dispatch, getState) => {
    let refresh = () => {
      // get the round we're in from the server
      bracketClient.getRound({ bracketId, userId })
        .then(roundData => {
          // if the round has advanced, or the tournament is over, we'll want to move on
          if (roundData.currentRound > getState().voting.currentRound || roundData.results) {
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