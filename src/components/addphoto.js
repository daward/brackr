import React, { Component } from 'react'
import _ from "lodash"
import { Image } from 'semantic-ui-react'

const AddPhoto = ({ contestant, setPhoto }) => {
  if (!contestant.viewingImages) {
    return <span />
  }
  return (
    <Image.Group size='tiny'>
      {_.map(contestant.imageCandidates, image => {
        return (<Image
          src={image}
          onClick={() => setPhoto(image)}
          disabled={contestant.image !== image && contestant.image} />)
      })}
    </Image.Group>
  );
}

export default AddPhoto;
