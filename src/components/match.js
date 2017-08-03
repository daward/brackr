import React, { Component } from 'react';
import _ from "lodash"
import { Button, Grid } from 'semantic-ui-react'
import browserHistory from "../history"
import Page from "./page"

const Match = ({ active, roundOver, bracketId, votingId, players, matchId, onVote }) => {
  if (roundOver) {
    browserHistory.push(`/bracket/${bracketId}/endround`)
  }

  if (!active) {
    return (<span />)
  }
  return (
    <Grid centered padded>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button.Group size='massive'>
            <Button primary={true} onClick={() => onVote(bracketId, matchId, players[0].seed)}>
              {players[0].data}
            </Button>
            <Button.Or />
            <Button primary={true} onClick={() => onVote(bracketId, matchId, players[1].seed)}>
              {players[1].data}
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Match;
