import { connect } from 'react-redux'
import EndRoundComponent from '../components/endround'
import { close } from '../actions/voting'
import { withRouter } from 'react-router'
import _ from 'lodash'

const mapStateToProps = (state, props) => {
  return {
    active: state.voting.roundOver,
    bracketId: props.params.filter
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

