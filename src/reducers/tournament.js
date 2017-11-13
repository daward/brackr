import _ from "lodash"

const tournament = (state = { currentRoundIdx: 0, currentRound: [], rounds: [] }, action) => {
  switch (action.type) {

    case 'TOURNAMENT_ROUND_CHANGE':
      return Object.assign({}, state, {
        // assume we start with no votes
        currentRoundIdx: action.round,
        currentRound: state.rounds[action.round]
      });

    // when a round is loaded, we need to clear
    // out the monitor
    case 'TOURNAMENT_LOADED':
      let rounds = _.map(action.response.rounds, round => {
        return _.map(round, match => {
          match.winner.data.seed = match.winner.seed;
          match.loser.data.seed = match.loser.seed;
          return _.sortBy([
            {
              data: match.winner.data,
              score: match.winner.score,
              winner: true
            },
            {
              data: match.loser.data,
              score: match.loser.score,
              winner: false
            },
          ], "data.seed");
        })
      })

      return Object.assign({}, state, {
        // assume we start with no votes
        currentRoundIdx: 0,
        rounds,
        currentRound: rounds[0]
      });
    default:
      return state;
  }
}

export default tournament