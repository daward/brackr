import { connect } from 'react-redux'
import Match from '../components/match'
import { vote } from '../actions/voting'
import _ from 'lodash'

const mapStateToProps = (state, ownProps) => {
  let bracketId = ownProps.data.bracketId;
  let match = state.voting.currentMatch;
  if (!match) {
    return {
      active: false,
      roundOver: state.voting.roundOver,
      roundNumber: state.voting.currentRound,
      bracketId,
      userId: state.currentUser.id
    }
  }
  let players = _.get(match, "players", []);
  let matchId = _.get(match, "id", 0);
  return {
    active: true,
    roundOver: state.voting.roundOver,
    bracketId: bracketId,
    roundNumber: state.voting.currentRound,
    userId: state.currentUser.id,
    players,
    matchId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let bracketId = ownProps.data.bracketId;
  return {
    onVote: ({ matchId, winningSeed, userId }) => {
      dispatch(vote({ bracketId, matchId, winningSeed, userId }))
    }
  }
}

const MatchVote = connect(
  mapStateToProps,
  mapDispatchToProps
)(Match)

export default MatchVote

