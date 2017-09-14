import P from 'bluebird'
import _ from 'lodash'
import bracketClient from '../clients/bracketclient'
import { bracketData } from '../clients/localidentifiers'

export function loadBracketHistory(userId) {
  return dispatch => {
    let brackets = bracketData.getAll();

    P.map(brackets, bracketId => {
      return bracketClient.getRound({ bracketId, userId }).then(result => {
        result.id = bracketId
        return result;
      }).catch(e => {
        // console.log(e);
      })
    })
      .then(results => {
        dispatch({
          type: 'BRACKETS_LOADED',
          brackets: _.compact(results)
        });
      })
  }
}