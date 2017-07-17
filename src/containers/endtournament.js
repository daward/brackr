import { connect } from 'react-redux'
import EndTournamentComponent from '../components/endtournament'

const mapStateToProps = (state, props) => {
  return {
    winner: state.voting.winner
  }
}

const EndRound = connect(
  mapStateToProps,
)(EndTournamentComponent)

export default EndRound

