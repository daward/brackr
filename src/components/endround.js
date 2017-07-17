import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const EndRound = ({ active, bracketId, onClose }) => {
  if(!active) {
    return(<span/>)
  }
  return (
    <div>
      <div>Your votes have been entered for this round</div>
      <br />
      <RaisedButton
        onClick={() => onClose(bracketId)}
        label="Close voting and move to next round" />
    </div>
  );
}

export default EndRound;