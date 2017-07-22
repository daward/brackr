import _ from "lodash"

const totalVotes = (state = { votes: 0, nextUpdate: Date.now() - 1 }, action) => {
  switch (action.type) {

    case 'LOAD_ROUND':
      return Object.assign({}, state, {
        nextUpdate: Date.now() - 1,
        votes: 0
      });
      break;

    case 'CHECKING_ROUND':
      return Object.assign({}, state, {
        nextUpdate: Date.now() + 4000
      });

    case 'CHECK_ROUND':
      let votes = _.sum(_.flatten(_.map(action.response.matches, match => (match.scores))))
      return Object.assign({}, state, {
        votes
      });

    case 'CHANGE_BRACKET_ID':
      return Object.assign({}, state, {
        votes: 0,
        nextUpdate: Date.now() - 1
      });

    default:
      return state;
  }
}

export default totalVotes