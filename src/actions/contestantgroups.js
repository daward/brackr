import P from 'bluebird'
import browserHistory from '../history'
import contestantGroupClient from '../clients/contestantgroupclient'
import bracketClient from '../clients/bracketclient'
import { contestantGroupData, bracketData } from '../clients/localidentifiers'

export function loadContestantGroup({ contestantGroupId }) {
  return dispatch => {
    contestantGroupClient.get(contestantGroupId)
      .then(contestantGroup => {
        dispatch({ type: "CONTESTANT_GROUP_LOADED", contestantGroup })
      })
  }
}

export function startNewContestantGroup() {
  return dispatch => {
    dispatch({ type: "NEW_CONTESTANT_GROUP_STARTED" });
  }
}

export function saveContestantGroup({ title, contestants, id }) {
  return dispatch => {
    return contestantGroupClient.save({ title, contestants, id })
      .then(response => {
        let contestantGroupId = response.contestantGroupId;
        contestantGroupData.set(contestantGroupId);
        browserHistory.push(`/create/${contestantGroupId}`)
      })
  }
}

export function startContestantGroup({ title, contestants, id }) {
  return dispatch => {

    let savePromise;
    if (title || contestants) {
      savePromise = contestantGroupClient.save({ title, contestants, id })
        .then(response => response.contestantGroupId)
    } else {
      savePromise = P.resolve(id);
    }

    return savePromise
      .then(contestantGroupId => bracketClient.start(contestantGroupId))
      .then(response => {
        let bracketId = response.bracketId;
        bracketData.set(bracketId);
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
