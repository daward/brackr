import { connect } from 'react-redux'
import Create from '../components/create'
import { changeContestant, saveContestantGroup, searchPhotos } from '../actions/creation'

const mapStateToProps = (state, ownProps) => {
  return {
    contestants: state.contestants.contestants,
    title: state.contestants.title,
    contestantGroupId: state.contestants.contestantGroupId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onContestantChange: (id, text) => {
      dispatch(changeContestant(id, text))
    },
    commit: (title, contestants) => {
      dispatch(saveContestantGroup({ title, contestants }))
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

