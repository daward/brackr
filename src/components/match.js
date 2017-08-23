import React from 'react';
import { Card, Grid, Divider, Image } from 'semantic-ui-react'
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
          <Card centered raised onClick={() => onVote(matchId, players[0].seed)}>
            <Card.Content>
              <Image bordered floated="right" src={players[0].data.image} />
              <Card.Header>
                {players[0].data.text}
              </Card.Header>
            </Card.Content>
          </Card>
          <Divider horizontal>Or</Divider>
          <Card centered raised onClick={() => onVote(matchId, players[1].seed)}>
            <Card.Content>
              <Image bordered floated="right" src={players[1].data.image} />
              <Card.Header>
                {players[1].data.text}
              </Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Match;
