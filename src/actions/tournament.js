import bracketClient from '../clients/bracketclient'
import { userData } from '../clients/userdata'

export function changeRound(round) {
  return dispatch => {
    dispatch({ type: 'TOURNAMENT_ROUND_CHANGE', round })
  }
}

export function loadTournament({ bracketId, tournamentId, userId }) {
  return dispatch => {
    dispatch({ type: 'TOURNAMENT_LOADING' });
    userId = userId || userData.get().id;
    bracketClient.getTournament({ bracketId, tournamentId, userId })
      .then(response => dispatch({
        type: 'TOURNAMENT_LOADED',
        response
      }))
      .catch(e => {
        console.log(e);
      });
  }
};
