
import { loadRound } from './voting'
import { startContestantGroup } from './contestantgroups' 
import bracketClient from '../clients/bracketclient'
import imagesClient from '../clients/imagesclient'

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