import _ from "lodash"

const totalVotes = (state = { votes: 0 }, action) => {
  switch (action.type) {

    // when a round is loaded, we need to clear
    // out the monitor
    case 'LOAD_ROUND':
      return Object.assign({}, state, {
        // assume we start with no votes
        votes: 0
      });

    // when we check a round, we want to know two things: how many votes and if the round
    // has advanced
    case 'CHECK_ROUND':
      const votes = _.sum(_.flatten(_.map(action.response.matches, match => (match.scores))))
      return Object.assign({}, state, {
        votes
      });

    case 'CHANGE_BRACKET_ID':
      return Object.assign({}, state, {
        votes: 0
      });

    default:
      return state;
  }
}

export default totalVotes