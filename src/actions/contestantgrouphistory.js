import contestantGroupClient from '../clients/contestantgroupclient'
import { userData } from '../clients/userdata'

export function loadContestantGroupHistory(userId) {
  return dispatch => {
    userId = userId || userData.get().id;
    return contestantGroupClient.getContestantGroups({ userId })
      .then(results => {
        dispatch({
          type: 'CONTESTANT_GROUPS_LOADED',
          contestantGroups: results
        });
      })
  }
}