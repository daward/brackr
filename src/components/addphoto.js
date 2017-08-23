import React from 'react'
import _ from "lodash"
import { Image, Container, Button } from 'semantic-ui-react'
import PhotoSearch from './photosearch'

const AddPhoto = ({ contestant, setPhoto }) => {
  if (!contestant.viewingImages) {
    return <span />
  }  

  return (
    <Container style={{ marginBottom: "15px" }}>
      <Image.Group size='tiny'>
        {_.map(contestant.imageCandidates, image => {
          return (<Image
            bordered
            src={image}
            onClick={() => setPhoto(image)}
            disabled={contestant.image !== image && contestant.image} />)
        })}
        <PhotoSearch setPhoto={setPhoto}/>
      </Image.Group>
    </Container>
  );
}

export default AddPhoto;
