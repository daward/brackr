import { connect } from 'react-redux'
import RoundComponent from '../components/round'
import { changeRound } from '../actions/tournament'
import browserHistory from '../history'

const mapStateToProps = (state, ownProps) => {
  return {
    round: state.tournament.currentRound,
    idx: state.tournament.currentRoundIdx,
    bracketId: ownProps.data.bracketId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let bracketId = ownProps.data.bracketId;
  return {
    onRoundChange: round => {
      dispatch(changeRound(round))
    },
    onReturn: () => {
      browserHistory.push(`/bracket/${bracketId}`)
    }
  }
}

const Round = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundComponent)

export default Round

