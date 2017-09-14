import React from 'react';
import Link from './link'
import { Segment } from 'semantic-ui-react'
import { self } from '../constants'

const ContestantGroupHistory = ({ contestantGroup }) => {
  return (
    <Segment.Group horizontal compact>
      <Segment>
        <Link to={`${self}/create/${contestantGroup.id}`}>{contestantGroup.title}</Link >
      </Segment>
    </Segment.Group>
  );
}

export default ContestantGroupHistory;
