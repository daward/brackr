import React from 'react';
import Link from './link'
import Share from './share'
import { Segment } from 'semantic-ui-react'
import { self } from '../constants'

const BracketHistory = ({ bracket }) => {
  let text = "Voting complete"
  if(!bracket.results) {
    text = `Round ${bracket.currentRound} of ${bracket.numberOfRounds}`
  }

  return (
    <Segment.Group horizontal compact>
      <Segment>
        <Link to={`${self}/bracket/${bracket.id}`}>{bracket.title}</Link >
      </Segment>
      <Segment>
        {text}
      </Segment>
      <Segment>
        <Share votingId={bracket.id} />
      </Segment>
    </Segment.Group>
  );
}

export default BracketHistory;
