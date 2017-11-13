const voting = (state = {
  matches: [],
  bracketId: '',
  currentRound: 0,
  totalRounds: 0
}, action) => {

  switch (action.type) {
    case 'VOTE_SET':
      return Object.assign({}, state, {
        matches: state.matches.slice(1)
      });

    case 'LOADING_ROUND':
      return Object.assign({}, state, {
        bracketId: action.bracketId
      });

    case 'LOAD_ROUND':
      let round = action.response;
      let winners;
      if (round.results) {
        winners = round.results;
      } 
      return Object.assign({}, state, {
        matches: round.matches,
        winners,
        currentRound: round.currentRound,
        totalRounds: round.totalRounds,
        admin: round.admin,
        title: round.title
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