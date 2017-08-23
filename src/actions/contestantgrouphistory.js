import P from 'bluebird'
import _ from 'lodash'
import contestantGroupClient from '../clients/contestantgroupclient'
import { contestantGroupData } from '../clients/localidentifiers'

export function loadContestantGroupHistory() {
  return dispatch => {
    let contestantGroupIds = contestantGroupData.getAll();

    P.map(contestantGroupIds, contestantGroupId => {
      return contestantGroupClient.get(contestantGroupId).then(result => {
        result.id = contestantGroupId
        return result;
      })
    })
      .then(results => {
        dispatch({
          type: 'CONTESTANT_GROUPS_LOADED',
          contestantGroups: _.compact(results)
        });
      })
  }
}