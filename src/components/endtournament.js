import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const EndTournament = ({ winner }) => {
  if (!winner) {
    return(<span/>);
  }
  return (
    <div>{winner.data} wins!</div>
  );
}

export default EndTournament;