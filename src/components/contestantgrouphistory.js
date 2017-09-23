import React from 'react';
import Link from './link'
import { Segment } from 'semantic-ui-react'
import { self } from '../constants'

const ContestantGroupHistory = ({ contestantGroupRef }) => {
  return (
    <Segment.Group horizontal compact>
      <Segment>
        <Link to={`${self}/create/${contestantGroupRef.id}`}>{contestantGroupRef.title}</Link >
      </Segment>
    </Segment.Group>
  );
}

export default ContestantGroupHistory;
