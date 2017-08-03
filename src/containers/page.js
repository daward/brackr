import { connect } from 'react-redux'
import PageComponent from '../components/page'

const mapStateToProps = (state) => {
  return {
    votingId: state.voting.votingId,
    title: state.voting.title,
    currentRound: state.voting.currentRound,
    totalRounds: state.voting.totalRounds
  }
}
const Page = connect(
  mapStateToProps
)(PageComponent)

export default Page

