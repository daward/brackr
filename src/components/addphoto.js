import React from 'react'
import { Container } from 'semantic-ui-react'
import PhotoSearch from './photosearch'
import PhotoSet from '../containers/photoset'

const AddPhoto = ({ contestant }) => {
  if (!contestant.viewingImages) {
    return <span />
  }

  return (
    <Container style={{ marginBottom: "15px" }}>
      <PhotoSet />
      <PhotoSearch />
    </Container>
  );
}

export default AddPhoto;
