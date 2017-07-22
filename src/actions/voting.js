import rp from 'request-promise'
import endpoint from './endpoint'

export function vote(bracketId, matchId, winningSeed) {
  return dispatch => {
    dispatch({ type: 'SETTING_VOTE' });
    let options = {
      url: `${endpoint}/bracket/${bracketId}/match/${matchId}/player/${winningSeed}`,
      method: "POST",
      json: {}
    }
    return rp(options)
      .then(response => {
        return dispatch({
          type: 'VOTE_SET'
        })
      })
      .catch(e => {
        console.log(e);
      });
  }
};

export function close(bracketId) {
  return dispatch => {
    dispatch({ type: 'CLOSING_ROUND' });
    let options = {
      url: `${endpoint}/bracket/${bracketId}/round/next`,
      method: "POST",
      json: {}
    }
    return rp(options)
      .then(response => dispatch({
        type: 'ROUND_CLOSED'
      }))
      .then(() => dispatch(loadRound(bracketId)))
      .catch(e => {
        console.log(e);
      });
  }
}

function queryRound(dispatch, bracketId, startEvent, finishEvent) {
  dispatch({ type: startEvent, bracketId });
  let options = {
    url: `${endpoint}/bracket/${bracketId}/round/current`,
    method: "GET"
  }
  return rp(options)
    .then(response => {
      return dispatch({
        type: finishEvent,
        response: JSON.parse(response)
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
