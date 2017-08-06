import React from 'react';
import { Button, Popup } from 'semantic-ui-react'
import { self } from '../constants'

const Share = ({ votingId }) => {
  const shareButton = (<Button icon="share alternate" size="mini" />)
  return (
    <Popup
      trigger={shareButton}
      on='click'
    >
      Send this link to friends: {self}/bracket/{votingId}
    </Popup>

  );
}

export default Share;


