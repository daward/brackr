
import browserHistory from '../history'
import P from 'bluebird'
import { loadRound } from '../actions/voting'
import Cookies from 'universal-cookie';
import contestantGroupClient from '../clients/contestantgroupclient'
import bracketClient from '../clients/bracketclient'
import ImagesClient from '../clients/imagesclient'
const cookies = new Cookies();
const imagesClient = new ImagesClient();

export function recreateBracket(bracketId) {
  return dispatch => {
    bracketClient.getBracket(bracketId)
      .then(bracket => dispatch(startContestantGroup({ id: bracket.contestantGroupId })))
      .catch(e => {
        console.log(e)
      });
  }
}

export function rerunBracket(bracketId) {
  return dispatch => {
    bracketClient.rerun(bracketId)
      .then(() => dispatch(loadRound(bracketId)));
  }
}

export function searchPhotos(photoIdx, contestant) {
  return dispatch => {
    if (contestant.imageCandidates && contestant.imageCandidates.length) {
      dispatch({ type: 'IMAGES_SEARCHED', photoIdx, images: contestant.imageCandidates })
    } else {
      imagesClient.get(contestant.text)
        .then(images => dispatch({ type: 'IMAGES_SEARCHED', photoIdx, images }))
    }
  }
}

export function loadContestantGroup({ contestantGroupId }) {
  return dispatch => {
    contestantGroupClient.get(contestantGroupId)
      .then(response => {
        dispatch({ type: "CONTESTANT_GROUP_LOADED", contestantGroup: JSON.parse(response) })
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

export function saveContestantGroup({ title, contestants, id }) {
  return dispatch => {
    return contestantGroupClient.save({ title, contestants, id })
      .then(response => {
        let contestantGroupId = response.contestantGroupId;
        browserHistory.push(`/create/${contestantGroupId}`)
      })
  }
}

export const changeContestant = (id, text) => {
  return {
    type: 'CHANGE_CONTESTANT',
    id,
    text
  }
}

export const failBracket = () => {
  return { type: 'COMMITTING_BRACKET', status: 'error', error: 'Oops' }
}
