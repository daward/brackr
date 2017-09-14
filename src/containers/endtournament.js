import { connect } from 'react-redux'
import { recreateBracket, rerunBracket } from "../actions/creation"
import EndTournamentComponent from '../components/endtournament'

const mapStateToProps = (state, ownProps) => {
  return {
    winners: state.voting.winners,
    admin: state.voting.admin,
    bracketId: ownProps.data.bracketId,
    userId: state.currentUser.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let bracketId = ownProps.data.bracketId;
  return {
    onRestart: (userId) => {
      dispatch(recreateBracket({ bracketId, userId }))
    },
    onRerun: (userId) => {
      dispatch(rerunBracket({ bracketId, userId }))
    }
  }
}

const EndTournament = connect(
  mapStateToProps,
  mapDispatchToProps
)(EndTournamentComponent)

export default EndTournament

