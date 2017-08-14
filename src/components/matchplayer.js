import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const MatchPlayer = ({ player }) => {
  return (
    <Card color={player.winner ? "green" : "red"} fluid>
      <Card.Content>
        <Card.Header>
          {player.winner ?
            <Icon name="checkmark box" color="green" /> :
            <Icon name="remove" color="red" />
          }
          {player.data.data}
        </Card.Header>
        <Card.Meta>
          Seed: {player.data.seed}
        </Card.Meta>
        <Card.Description>
          Votes: {player.score}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default MatchPlayer;
