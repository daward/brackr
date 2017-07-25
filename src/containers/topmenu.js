import { connect } from 'react-redux'
import TopMenuComponent from '../components/topmenu'

const mapStateToProps = (state) => {
  return {
    votingId: state.voting.votingId,
    currentRound: state.voting.currentRound,
    totalRounds: state.voting.totalRounds
  }
}
const TopMenu = connect(
  mapStateToProps
)(TopMenuComponent)

export default TopMenu

