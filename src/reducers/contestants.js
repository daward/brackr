const contestants = (state = {
  contestants: [{
    text: ""
  }]
}, action) => {
  let contestants;
  switch (action.type) {
    case 'CHANGE_CONTESTANT':
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

    case 'SET_PHOTO':
      contestants = [
        ...state.contestants
      ];

      contestants[action.photoIdx].image = action.image;
      contestants[action.photoIdx].viewingImages = false
      return Object.assign({}, state, {
        contestants
      });

    case 'CHANGE_TITLE':
      return Object.assign({}, state, {
        title: action.title
      });

    case 'IMAGES_SEARCHED':
      contestants = [
        ...state.contestants
      ];

      contestants[action.photoIdx].imageCandidates = action.images;
      contestants[action.photoIdx].viewingImages = true
      return Object.assign({}, state, {
        contestants,
      });

    default:
      return state;
  }
}

export default contestants