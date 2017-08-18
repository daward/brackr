import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const MatchPlayer = ({ player }) => {
  if(player.data.slug) {
    return <span/>
  }
  return (
    <Card color={player.winner ? "green" : "red"} fluid>
      <Card.Content>
        <Image floated="right" src={player.data.data.image} size='small'/>
        <Card.Header>
          {player.winner ?
            <Icon name="checkmark box" color="green" /> :
            <Icon name="remove" color="red" />
          }
          {player.data.data.text}
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
