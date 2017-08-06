import { connect } from 'react-redux'
import Match from '../components/match'
import { vote } from '../actions/voting'
import _ from 'lodash'

const mapStateToProps = (state, ownProps) => {
  let bracketId = ownProps.data.bracketId;
  let match = state.voting.currentMatch;
  if(!match) {
    return {
      active: false,
      roundOver: state.voting.roundOver,
      bracketId,
      votingId: state.voting.votingId
    }
  }
  let players = _.get(match, "players", []);
  let matchId = _.get(match, "id", 0);
  return {
    active: true,
    roundOver: state.voting.roundOver,
    bracketId: bracketId,
    votingId: state.voting.votingId,
    players,
    matchId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let bracketId = ownProps.data.bracketId;
  return {
    onVote: (matchId, winningSeed) => {
      dispatch(vote(bracketId, matchId, winningSeed))
    }
  }
}

const MatchVote = connect(
  mapStateToProps,
  mapDispatchToProps
)(Match)

export default MatchVote

