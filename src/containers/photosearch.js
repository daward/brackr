import { connect } from 'react-redux'
import PhotoSearchComponent from '../components/photosearchcontent'
import { searchCurrent } from '../actions/creation'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchPhotos: searchTerm => dispatch(searchCurrent({ searchTerm })),
    setPhoto: image => dispatch({ type: "SET_PHOTO", image })
  }
}


const PhotoSearchBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoSearchComponent)

export default PhotoSearchBox

