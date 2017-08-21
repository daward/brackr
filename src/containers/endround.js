import { connect } from 'react-redux'
import EndRoundComponent from '../components/endround'
import { pollEndRound } from '../actions/pollendround'
import { close } from '../actions/voting'

const mapStateToProps = (state, ownProps) => {
  // this is probably where we can subscribe to two states
  // one for the overall voting total, and one for our personal votes
  // we can dispatch an action that keeps the former up-to-date 
  return {
    bracketId: ownProps.data.bracketId,
    votes: state.totalVotes.votes,
    admin: state.voting.admin,
    round: state.voting.currentRound
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let bracketId = ownProps.data.bracketId;
  return {
    onClose: () => {
      dispatch(close(bracketId))
    },
    pollRound: (round) => {
      dispatch(pollEndRound(bracketId, round));
    }
  }
}

const EndRound = connect(
  mapStateToProps,
  mapDispatchToProps
)(EndRoundComponent)

export default EndRound

