import rp from 'request-promise'
import { browserHistory } from 'react-router'

import { loadRound } from '../actions/voting'
import _ from "lodash"
import endpoint from "./endpoint";

export function recreateBracket(bracketId) {
  return dispatch => {
    return rp({
      url: `${endpoint}/bracket/${bracketId}`,
      method: "GET",
    })
      .then(response => JSON.parse(response).choices)
      .then(choices => dispatch(commitBracket(choices)))
      .catch(e => {
        console.log(e)
      });
  }
}

export function rerunBracket(bracketId) {
  return dispatch => {
    return rp({
      url: `${endpoint}/bracket/${bracketId}/next`,
      method: "POST",
      json: {}
    })
      .then(response => {
        return dispatch(loadRound(bracketId));
      });
  }
}

export function commitBracket(contestants) {
  return dispatch => {
    dispatch(startBracket());
    let options = {
      url: `${endpoint}/bracket`,
      method: "POST",
      json: _.compact(contestants)
    }
    return rp(options)
      .then(response => {
        browserHistory.push(`/bracket/${response.id}`)
        return;
      });
  }
}

export const changeContestant = (id, text) => {
  return {
    type: 'CHANGE_CONTESTANT',
    id,
    text
  }
}

export const startBracket = () => {
  return {
    type: 'COMMITTING_BRACKET'
  }
}

export const failBracket = () => {
  return { type: 'COMMITTING_BRACKET', status: 'error', error: 'Oops' }
}
