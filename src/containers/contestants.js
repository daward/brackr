import { connect } from 'react-redux'
import Create from '../components/create'
import { changeContestant, saveContestantGroup, startContestantGroup } from '../actions/contestantgroups'
import { searchPhotos } from '../actions/creation'

const mapStateToProps = (state, ownProps) => {
  return {
    contestants: state.contestants.contestants,
    title: state.contestants.title,
    contestantGroupId: state.contestants.contestantGroupId,
    userId: state.currentUser.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onContestantChange: (id, text) => {
      dispatch(changeContestant(id, text))
    },
    start: ({ title, contestants, contestantGroupId, userId }) => {
      dispatch(startContestantGroup({ title, contestants, id: contestantGroupId, userId }))
    },
    save: ({ title, contestants, contestantGroupId, userId }) => {
      dispatch(saveContestantGroup({ title, contestants, id: contestantGroupId, userId }))
    },
    changeTitle: (title) => dispatch({ type: "CHANGE_TITLE", title }),
    addPhotos: ({ photoIdx, contestant }) => dispatch(searchPhotos({ photoIdx, contestant })),
  }
}

const Contestants = connect(
  mapStateToProps,
  mapDispatchToProps
)(Create)

export default Contestants

