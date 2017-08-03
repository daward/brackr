const contestants = (state = { contestants: [""], isCommitting: false }, action) => {
  switch (action.type) {
    case 'CHANGE_CONTESTANT':
      let position = parseInt(action.id);
      let newState = Object.assign({}, state, {
        contestants: [
          ...state.contestants
        ]
      })
      if (position >= newState.contestants.length) {
        newState.contestants.push("");
      }
      newState.contestants[position - 1] = action.text;

      return newState;

    default:
      return state;
  }
}

export default contestants