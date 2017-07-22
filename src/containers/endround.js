import { connect } from 'react-redux'
import EndRoundComponent from '../components/endround'
import { close } from '../actions/voting'
import { withRouter } from 'react-router'
import _ from 'lodash'

const mapStateToProps = (state, props) => {
  // this is probably where we can subscribe to two states
  // one for the overall voting total, and one for our personal votes
  // we can dispatch an action that keeps the former up-to-date 
  return {
    active: state.voting.roundOver,
    bracketId: props.params.filter,
    votes: state.totalVotes.votes
  }
}

const mapDispatchToProps = (dispatch, props) => {
  let bracketId = props.params.filter;
  return {
    onClose: (bracketId) => {
      dispatch(close(bracketId))
    }
  }
}

const EndRound = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EndRoundComponent)) 

export default EndRound

