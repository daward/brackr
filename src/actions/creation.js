
import { loadRound } from './voting'
import { startContestantGroup } from './contestantgroups'
import bracketClient from '../clients/bracketclient'
import imagesClient from '../clients/imagesclient'

export function recreateBracket({ bracketId, userId }) {
  return dispatch => {
    bracketClient.getBracket({ bracketId, userId })
      .then(bracket => dispatch(startContestantGroup({ id: bracket.contestantGroupId, userId })))
      .catch(e => {
        console.log(e)
      });
  }
}

export function rerunBracket({ bracketId, userId }) {
  return dispatch => {
    bracketClient.rerun({ bracketId, userId })
      .then(() => dispatch(loadRound({ bracketId, userId })));
  }
}

export function searchCurrent({ searchTerm }) {
  return dispatch => {
    imagesClient.get(searchTerm)
      .then(images => dispatch({ type: 'IMAGES_SEARCHED', images }))
  }
}

export function searchPhotos({ photoIdx, contestant }) {
  return dispatch => {
    if (contestant.imageCandidates && contestant.imageCandidates.length) {
      dispatch({ type: 'IMAGES_SEARCHED', photoIdx, images: contestant.imageCandidates })
    } else {
      imagesClient.get(contestant.text)
        .then(images => dispatch({ type: 'IMAGES_SEARCHED', photoIdx, images }))
    }
  }
}