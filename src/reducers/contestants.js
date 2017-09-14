import _ from 'lodash'

const actions = {
  CHANGE_CONTESTANT: (action, state) => {
    let position = parseInt(action.id, 10);
    let newState = Object.assign({}, state, {
      contestants: [
        ...state.contestants
      ]
    })
    if (position >= newState.contestants.length) {
      newState.contestants.push({ text: "" });
    }
    newState.contestants[position - 1].text = action.text;
    newState.contestants[position - 1].imageCandidates = [];
    newState.contestants[position - 1].image = undefined;
    return newState;
  },
  NEW_CONTESTANT_GROUP_STARTED: (action, state) => {
    return Object.assign({}, state, {
      title: "",
      contestants: [{
        text: ""
      }],
      contestantGroupId: ""
    });
  },

  SET_PHOTO: (action, state) => {
    let contestants = [
      ...state.contestants
    ];
    let contestant = contestants[action.photoIdx || state.photoIdx];
    contestant.image = action.image;

    if (!_.includes(contestant.imageCandidates, action.image)) {
      contestant.imageCandidates.push(action.image)
    }
    contestant.viewingImages = false
    return Object.assign({}, state, {
      contestants
    });
  },

  CONTESTANT_GROUP_LOADED: (action, state) => {
    let contestants = action.contestantGroup.choices || [];
    contestants.push({ text: "" });
    return Object.assign({}, state, {
      title: action.contestantGroup.title,
      contestants,
      contestantGroupId: action.contestantGroup.contestantGroupId
    });
  },

  CHANGE_TITLE: (action, state) => {
    return Object.assign({}, state, {
      title: action.title
    });
  },

  IMAGES_SEARCHED: (action, state) => {
    let contestants = [
      ...state.contestants
    ];
    let photoIdx = action.photoIdx || state.photoIdx;

    contestants[photoIdx].imageCandidates = action.images;
    contestants[photoIdx].viewingImages = true
    return Object.assign({}, state, {
      contestants,
      photoIdx: photoIdx
    });
  }

}

const contestants = (state = {
  title: "",
  contestants: [{
    text: ""
  }],
  photoIdx: 0,
  contestantGroupId: ""
}, action) => {

  if (!actions[action.type]) {
    return state;
  }

  return actions[action.type](action, state);
}

export default contestants