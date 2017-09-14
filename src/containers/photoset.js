import { connect } from 'react-redux'
import PhotoSetComponent from '../components/photoset'

const mapStateToProps = (state, ownProps) => {
  let contestant = state.contestants.contestants[state.contestants.photoIdx];
  let images = contestant.imageCandidates;
  if (contestant.image) {
    images = [contestant.image]
  }

  return {
    contestant,
    images,
    type: ownProps.type
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPhoto: image => dispatch({ type: "SET_PHOTO", image })
  }
}

const PhotoSet = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoSetComponent)

export default PhotoSet

