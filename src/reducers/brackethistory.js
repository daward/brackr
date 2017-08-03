import _ from "lodash"

const bracketHistory = (state = { brackets: [] }, action) => {
  switch (action.type) {

    // when a round is loaded, we need to clear
    // out the monitor
    case 'BRACKETS_LOADED':
      return Object.assign({}, state, {
        // assume we start with no votes
        brackets: action.brackets
      });
      break;

    default:
      return state;
  }
}

export default bracketHistory