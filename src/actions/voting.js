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

export function loadRound(bracketId) {
  return dispatch => {
    dispatch({ type: 'LOADING_BRACKET', bracketId });
    let options = {
      url: `${endpoint}/bracket/${bracketId}/round/current`,
      method: "GET"
    }
    return rp(options)
      .then(response => {
        return dispatch({
          type: 'LOAD_ROUND',
          status: 'success',
          response: JSON.parse(response)
        })
      });
  }
};

export const bracketIdChange = (bracketId) => {
  return {
    type: 'CHANGE_BRACKET_ID',
    bracketId: bracketId
  }
}
