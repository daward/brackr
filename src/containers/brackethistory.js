import { connect } from 'react-redux'
import BracketHistoryList from '../components/brackethistorylist'

const mapStateToProps = state => {
  return {
    brackets: state.bracketHistory.brackets,
    contestantGroups: state.contestantGroupHistory.contestantGroups
  }
}

const retVal = connect(mapStateToProps)(BracketHistoryList)

export default retVal