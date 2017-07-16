import { connect } from 'react-redux'
import Create from '../components/create'
import { changeContestant, commitBracket } from '../actions/creation'

const mapStateToProps = state => {
  return {
    contestants: state.contestants.contestants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onContestantChange: (id, text) => {
      dispatch(changeContestant(id, text))
    },
    commit: (contestants) => {
      dispatch(commitBracket(contestants))
    }
  }
}

const Contestants = connect(
  mapStateToProps,
  mapDispatchToProps
)(Create)

export default Contestants

