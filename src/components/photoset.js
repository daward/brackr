import React from 'react'
import _ from "lodash"
import { Image } from 'semantic-ui-react'

const PhotoSet = ({ contestant, type, setPhoto }) => {
  return (
    <Image.Group size='tiny'>
      {_.map(contestant.imageCandidates, image => {
        return (<Image
          bordered
          key={`${type}-${image}`}
          src={image}
          onClick={() => setPhoto(image)}
          disabled={contestant.image !== image && contestant.image} />)
      })}
    </Image.Group>
  );
}

export default PhotoSet;
