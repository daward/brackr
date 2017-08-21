import { connect } from 'react-redux'
import Create from '../components/create'
import { changeContestant, saveContestantGroup, searchPhotos, startContestantGroup } from '../actions/creation'

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
    start: (title, contestants, contestantGroupId) => {
      dispatch(startContestantGroup({ title, contestants, id: contestantGroupId }))
    },
    save: (title, contestants, contestantGroupId) => {
      dispatch(saveContestantGroup({ title, contestants, id: contestantGroupId }))
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

