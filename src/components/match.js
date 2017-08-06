import React from 'react';
import { Button, Grid, Divider } from 'semantic-ui-react'
import browserHistory from "../history"

const Match = ({ active, roundOver, bracketId, votingId, players, matchId, onVote }) => {
  if (roundOver) {
    browserHistory.push(`/bracket/${bracketId}/endround`)
  }

  if (!active) {
    return (<span />)
  }
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column textAlign="center" mobile={16} tablet={8} computer={6}>
            <Button primary={true} onClick={() => onVote(matchId, players[0].seed)}>
              {players[0].data}
            </Button>
            <Divider horizontal>Or</Divider>
            <Button primary={true} onClick={() => onVote(matchId, players[1].seed)}>
              {players[1].data}
            </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Match;
