import { connect } from 'react-redux'
import Match from '../components/match'
import { vote } from '../actions/voting'
import { withRouter } from 'react-router'
import _ from 'lodash'

const mapStateToProps = (state, props) => {
  let bracketId = props.params.filter;
  let match = state.voting.currentMatch;
  if(!match) {
    return {
      active: false
    }
  }
  let players = _.get(match, "players", []);
  let matchId = _.get(match, "id", 0);
  return {
    active: true,
    players,
    bracketId: bracketId,
    matchId,
    votingId: state.voting.votingId
  }
}

const mapDispatchToProps = (dispatch, props) => {
  let bracketId = props.params.filter;
  return {
    onVote: (bracketId, matchId, winningSeed) => {
      dispatch(vote(bracketId, matchId, winningSeed))
    }
  }
}

const MatchVote = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Match)) 

export default MatchVote

