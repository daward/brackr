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

  SET_PHOTO: (action, state) => {
    let contestants = [
      ...state.contestants
    ];

    contestants[action.photoIdx].image = action.image;
    contestants[action.photoIdx].viewingImages = false
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

    contestants[action.photoIdx].imageCandidates = action.images;
    contestants[action.photoIdx].viewingImages = true
    return Object.assign({}, state, {
      contestants,
    });
  }

}

const contestants = (state = {
  title: "",
  contestants: [{
    text: ""
  }],
  contestantGroupId: ""
}, action) => {

  if (!actions[action.type]) {
    return state;
  }

  return actions[action.type](action, state);
}

export default contestants