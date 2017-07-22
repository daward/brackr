const voting = (state = { round: { matches: [] }, currentMatchIndex: 0, bracketId: '', roundOver: false }, action) => {
  
  switch (action.type) {
    case 'VOTE_SET':
      let currentMatchIndex = state.currentMatchIndex + 1;
      let roundOver = currentMatchIndex >= state.round.matches.length;
      return Object.assign({}, state, {
        currentMatchIndex,
        roundOver,
        currentMatch : state.round.matches[currentMatchIndex]
      });

    case 'LOADING_ROUND':
      return Object.assign({}, state, {
        bracketId: action.bracketId
      });

    case 'LOAD_ROUND':
      let round = action.response;
      let winners, currentMatch;
      if(round.results) {
        winners = round.results;
      } else {
        currentMatch = round.matches[0];
      }
      return Object.assign({}, state, {
        round,
        currentMatchIndex: 0,
        roundOver: false,
        winners,
        currentMatch
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