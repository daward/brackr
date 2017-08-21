import bracketClient from '../clients/bracketclient'

export function changeRound(round) {
  return dispatch => {
    dispatch({ type: 'TOURNAMENT_ROUND_CHANGE', round })
  }
}

export function loadTournament(bracketId, tournamentId) {
  return dispatch => {
    dispatch({ type: 'TOURNAMENT_LOADING' });
    bracketClient.getTournament({ bracketId, tournamentId })
      .then(response => dispatch({
        type: 'TOURNAMENT_LOADED',
        response
      }))
      .catch(e => {
        console.log(e);
      });
  }
};
