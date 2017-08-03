import { connect } from 'react-redux'
import { recreateBracket, rerunBracket } from "../actions/creation"
import EndTournamentComponent from '../components/endtournament'

const mapStateToProps = (state, ownProps) => {
  return {
    winners: state.voting.winners,
    admin: state.voting.admin
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let bracketId = ownProps.data.bracketId;
  return {
    onRestart: () => {
      dispatch(recreateBracket(bracketId))
    },
    onRerun: () => {
      dispatch(rerunBracket(bracketId))
    }
  }
}

const EndTournament = connect(
  mapStateToProps,
  mapDispatchToProps
)(EndTournamentComponent)

export default EndTournament

