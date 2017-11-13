import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const MatchPlayer = ({ player, bye }) => {
  if (player.data.slug) {
    return <span />
  }
  return (
    
    <Card centered raised color={player.winner ? "green" : "red"}
      style={{ backgroundColor: player.winner ? "#f2fff5" : "#fff4f4" }} >
      <Card.Content>
        {<Image floated="right" src={player.data.image} size='tiny' />}
        <Card.Header>
          {player.winner ?
            <Icon name="checkmark box" color="green" /> :
            <Icon name="remove" color="red" />
          }
          {player.data.text}
        </Card.Header>
        <Card.Meta>
          Seed: {player.data.seed}
        </Card.Meta>
        <Card.Description>
          {bye ? "Advanced due to bye" : `Votes: ${player.score}`}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default MatchPlayer;
