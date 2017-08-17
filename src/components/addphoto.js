import React, { Component } from 'react'
import _ from "lodash"
import { Image } from 'semantic-ui-react'

const AddPhoto = ({ images, setPhoto }) => {
  return (
    <Image.Group size='tiny'>
      {_.map(images, image => {
        return (<Image src={image} onClick={() => setPhoto(image)} />)
      })}
    </Image.Group>
  );
}

export default AddPhoto;
