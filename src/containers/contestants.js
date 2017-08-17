import { connect } from 'react-redux'
import Create from '../components/create'
import { changeContestant, commitBracket, searchPhotos } from '../actions/creation'

const mapStateToProps = state => {
  return {
    contestants: state.contestants.contestants,
    title: state.contestants.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onContestantChange: (id, text) => {
      dispatch(changeContestant(id, text))
    },
    commit: (title, contestants) => {
      dispatch(commitBracket(title, contestants))
    },
    changeTitle: (title) => dispatch({ type: "CHANGE_TITLE", title }),
    addPhotos: (photoIdx, contestant) => dispatch(searchPhotos(photoIdx, contestant)),
    setPhoto: (photoIdx, image) => dispatch({ type: "SET_PHOTO", photoIdx, image })
  }
}

const Contestants = connect(
  mapStateToProps,
  mapDispatchToProps
)(Create)

export default Contestants

