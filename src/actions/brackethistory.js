import Cookies from 'universal-cookie';
import P from 'bluebird'
import { getRound } from './pollendround'
import _ from 'lodash'

const cookies = new Cookies();

export function loadHistory() {
  return dispatch => {
    let brackets = cookies.get('recentBrackets') || [];

    P.map(brackets, bracketId => {
      return getRound(bracketId).then(result => {
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