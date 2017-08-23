const contestantGroupHistory = (state = { contestantGroups: [] }, action) => {
  switch (action.type) {

    // when a round is loaded, we need to clear
    // out the monitor
    case 'CONTESTANT_GROUPS_LOADED':
      return Object.assign({}, state, {
        // assume we start with no votes
        contestantGroups: action.contestantGroups
      });
    default:
      return state;
  }
}

export default contestantGroupHistory