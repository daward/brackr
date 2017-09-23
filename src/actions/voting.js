import bracketClient from '../clients/bracketclient'
import browserHistory from '../history'
import { userData } from '../clients/userdata';

export function vote({ bracketId, matchId, winningSeed, userId }) {
  return dispatch => {
    dispatch({ type: 'SETTING_VOTE' });
    bracketClient.vote({ bracketId, matchId, winningSeed, userId })
      .then(response => dispatch({ type: 'VOTE_SET' }))
      .catch(e => {
        console.log(e);
      });
  }
};

export function close({ bracketId, userId }) {
  return dispatch => {
    dispatch({ type: 'CLOSING_ROUND' });
    bracketClient.closeRound({ bracketId, userId })
      .then(response => dispatch({
        type: 'ROUND_CLOSED'
      }))
      .then(() => browserHistory.push(`/bracket/${bracketId}`))
      .catch(e => {
        console.log(e);
      });
  }
}

function queryRound({ dispatch, bracketId, startEvent, finishEvent, userId }) {
  dispatch({ type: startEvent, bracketId });
  return bracketClient.getCurrentRound({ bracketId, userId })
    .then(response => {
      console.log(response);
      return dispatch({
        type: finishEvent,
        response
      })
    });
};

export function loadRound({ bracketId, userId }) {
  return dispatch => {
    userId = userId || userData.get().id;
    return queryRound({
      dispatch, bracketId, startEvent: "LOADING_ROUND", finishEvent: "LOAD_ROUND", userId
    })
  };
}

export function checkRound({ bracketId, userId }) {
  return dispatch => {
    return queryRound({
      dispatch, bracketId, startEvent: "CHECKING_ROUND", finishEvent: "CHECK_ROUND", userId
    });
  }
}

export const bracketIdChange = (bracketId) => {
  return {
    type: 'CHANGE_BRACKET_ID',
    bracketId: bracketId
  }
}
