import React, { Component } from 'react';
import _ from "lodash";
import Link from './link'
import Share from './share'
import { Input, Button, Grid, Divider, Segment } from 'semantic-ui-react'
import { self } from '../constants'

const BracketHistory = ({ bracket }) => {
  let text = "Voting complete"
  if(!bracket.results) {
    text = `Round ${bracket.currentRound} of ${bracket.totalRounds}`
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
        <Share votingId={bracket.votingId} />
      </Segment>
    </Segment.Group>
  );
}

export default BracketHistory;
