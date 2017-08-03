import rp from 'request-promise'
import browserHistory from '../history'

import { loadRound } from '../actions/voting'
import _ from "lodash"
import { endpoint } from "../constants";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function recreateBracket(bracketId) {
  return dispatch => {
    return rp({
      url: `${endpoint}/bracket/${bracketId}`,
      method: "GET",
    })
      .then(response => JSON.parse(response))
      .then(bracket => dispatch(commitBracket(bracket.title, bracket.choices)))
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

export function commitBracket(title, contestants) {
  return dispatch => {
    dispatch(startBracket());
    let options = {
      url: `${endpoint}/bracket`,
      method: "POST",
      json: {
        title: title,
        choices: _.compact(contestants)
      }
    }
    return rp(options)
      .then(response => {
        let bracketId = response.id;
        let recent = cookies.get('recentBrackets') || [];
        recent.push(bracketId);
        var someDate = new Date();
        someDate.setDate(someDate.getDate() + 14);
        cookies.set('recentBrackets', JSON.stringify(recent), { path: '/', expires: someDate });
        browserHistory.push(`/bracket/${bracketId}`)
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
