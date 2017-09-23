import { connect } from 'react-redux'
import PageComponent from '../components/page'

const mapStateToProps = (state) => {
  return {
    bracketId: state.voting.bracketId,
    title: state.voting.title,
    currentRound: state.voting.currentRound,
    totalRounds: state.voting.totalRounds
  }
}
const Page = connect(
  mapStateToProps
)(PageComponent)

export default Page

