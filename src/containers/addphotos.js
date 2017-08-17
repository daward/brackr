import { connect } from 'react-redux'
import AddPhoto from '../components/addphoto'

const mapStateToProps = state => {
  let contestant = state.contestants.contestants[state.contestants.photoIdx];
  let images = state.contestants.imageCandidates;
  if (contestant.image) {
    images = [contestant.image]
  }
  return {
    contestant,
    images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPhoto: imageUrl => dispatch({ type: "SET_PHOTO", imageUrl })
  }
}

const Contestants = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPhoto)

export default Contestants

