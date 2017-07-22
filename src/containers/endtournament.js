import { connect } from 'react-redux'
import { recreateBracket, rerunBracket } from "../actions/creation"
import EndTournamentComponent from '../components/endtournament'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) => {
  return {
    winners: state.voting.winners
  }
}

const mapDispatchToProps = (dispatch, props) => {
  let bracketId = props.params.filter;
  return {
    onRestart: () => {
      dispatch(recreateBracket(bracketId))
    },
    onRerun: () => {
      dispatch(rerunBracket(bracketId))
    }
  }
}

const EndTournament = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EndTournamentComponent))

export default EndTournament

