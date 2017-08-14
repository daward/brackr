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
          let winnerIdx;
          if (match.scores[0] >= match.scores[1]) {
            winnerIdx = 0;
          } else {
            winnerIdx = 1;
          }

          return [
            {
              data: match.players[0],
              score: match.scores[0],
              winner: winnerIdx === 0
            },
            {
              data: match.players[1],
              score: match.scores[1],
              winner: winnerIdx === 1
            },
          ]
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