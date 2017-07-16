const voting = (state = { round: { matches: [] }, currentMatchIndex: 0, bracketId: '' }, action) => {
  switch (action.type) {
    case 'VOTE_SET':
      return Object.assign({}, state, {
        currentMatchIndex: state.currentMatchIndex + 1
      });

    case 'LOADING_BRACKET':
      return Object.assign({}, state, {
        bracketId: action.bracketId
      });

    case 'LOAD_ROUND':
      return Object.assign({}, state, {
        round: action.response,
        currentMatchIndex: 0
      });
    
    case 'CHANGE_BRACKET_ID':
      return Object.assign({}, state, {
        bracketId: action.bracketId
      });
      
    default:
      return state;
  }
}

export default voting