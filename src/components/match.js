import React, { Component } from 'react';
import _ from "lodash"
import RaisedButton from 'material-ui/RaisedButton';

const Match = ({ active, players, bracketId, matchId, onVote }) => {
  if (!active) {
    return (<span />)
  }
  return (
    <div>
      Bracket: {bracketId} / Match: {matchId} <br />
      --------------------------------

        {players.map((player, i) => <div key={i}>
        {!!i && <div>v.</div>}
        <RaisedButton
          onClick={() => onVote(bracketId, matchId, player.seed)}
          label={player.data} />
      </div>)}
    </div>
  );
}

export default Match;
