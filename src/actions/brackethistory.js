import P from 'bluebird'
import _ from 'lodash'
import bracketClient from '../clients/bracketclient'

export function loadBracketHistory(userId) {
  return dispatch => {
    return bracketClient.getBrackets({userId})
      .then(brackets => {
        dispatch({
          type: 'BRACKETS_LOADED',
          brackets
        });
      });
  }
}