import bracketClient from '../clients/bracketclient'
import browserHistory from '../history'

export function vote(bracketId, matchId, winningSeed) {
  return dispatch => {
    dispatch({ type: 'SETTING_VOTE' });
    bracketClient.vote({ bracketId, matchId, winningSeed })
      .then(response => dispatch({ type: 'VOTE_SET' }))
      .catch(e => {
        console.log(e);
      });
  }
};

export function close(bracketId) {
  return dispatch => {
    dispatch({ type: 'CLOSING_ROUND' });
    bracketClient.closeRound(bracketId)
      .then(response => dispatch({
        type: 'ROUND_CLOSED'
      }))
      .then(() => browserHistory.push(`/bracket/${bracketId}`))
      .catch(e => {
        console.log(e);
      });
  }
}

function queryRound(dispatch, bracketId, startEvent, finishEvent) {
  dispatch({ type: startEvent, bracketId });
  bracketClient.getCurrentRound(bracketId)
    .then(response => {
      return dispatch({
        type: finishEvent,
        response
      })
    });
};

export function loadRound(bracketId) {
  return dispatch => queryRound(dispatch, bracketId, "LOADING_ROUND", "LOAD_ROUND")
}

export function checkRound(bracketId) {
  return dispatch => {
    queryRound(dispatch, bracketId, "CHECKING_ROUND", "CHECK_ROUND");
  }
}

export const bracketIdChange = (bracketId) => {
  return {
    type: 'CHANGE_BRACKET_ID',
    bracketId: bracketId
  }
}
