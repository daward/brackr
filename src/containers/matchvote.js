import { connect } from 'react-redux'
import Match from '../components/match'
import { vote, close } from '../actions/voting'
import { withRouter } from 'react-router'
import _ from 'lodash'

const mapStateToProps = (state, props) => {
  let bracketId = props.params.filter;

  let roundOver = state.voting.currentMatchIndex >= state.voting.round.matches.length;
  let tournamentOver = state.voting.round.currentRound > state.voting.round.totalRounds;
  let match = state.voting.round.matches[state.voting.currentMatchIndex];
  let players = _.get(match, "players", []);
  let matchId = _.get(match, "id", 0);
  return {
    players,
    bracketId: bracketId,
    matchId,
    roundOver,
    tournamentOver
  }
}

const mapDispatchToProps = (dispatch, props) => {
  let bracketId = props.params.filter;
  return {
    onVote: (bracketId, matchId, winningSeed) => {
      dispatch(vote(bracketId, matchId, winningSeed))
    },
    onClose: (bracketId) => {
      dispatch(close(bracketId))
    }
  }
}

const MatchVote = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Match)) 

export default MatchVote

