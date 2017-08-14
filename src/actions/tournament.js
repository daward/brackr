import rp from 'request-promise'
import { endpoint } from '../constants'

export function changeRound(round) {
  return dispatch => {
    dispatch({ type: 'TOURNAMENT_ROUND_CHANGE', round})
  }
}

export function loadTournament(bracketId, tournamentId) {
  return dispatch => {
    dispatch({ type: 'TOURNAMENT_LOADING' });
    let options = {
      url: `${endpoint}/bracket/${bracketId}/tournament/${tournamentId}`,
      method: "GET"
    }
    return rp(options)
      .then(response => dispatch({
        type: 'TOURNAMENT_LOADED',
        response: JSON.parse(response)
      }))
      .catch(e => {
        console.log(e);
      });
  }
};
