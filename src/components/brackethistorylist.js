import React from 'react';
import _ from "lodash";
import { Grid, Header } from 'semantic-ui-react'
import Page from "./page"
import BracketHistory from './brackethistory'
import ContestantGroupHistory from './contestantgrouphistory'

const BracketHistoryList = ({ brackets, contestantGroupRefs }) => {
  return (
    <Page title="Your Brackets">
      <Grid centered>
        <Grid.Row>
          <Grid.Column textAlign="center" mobile={16} tablet={10} computer={6}>
            <Header attached="top" inverted>In Progress</Header>
            {_.map(contestantGroupRefs, contestantGroupRef => (
              <ContestantGroupHistory key={contestantGroupRef.id} contestantGroupRef={contestantGroupRef} />))}

            <Header attached="top" inverted>Voting</Header>
            {_.map(brackets, bracket => (<BracketHistory key={bracket.id} bracket={bracket} />))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Page>
  );
}

export default BracketHistoryList;
