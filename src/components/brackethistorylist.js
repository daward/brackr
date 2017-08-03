import React, { Component } from 'react';
import _ from "lodash";
import Link from './link'
import { Input, Button, Grid, Divider } from 'semantic-ui-react'
import Page from "./page"
import BracketHistory from './brackethistory'

const BracketHistoryList = ({ brackets }) => {
  console.log(brackets);
  return (
    <Page title="Your Brackets">
      <Grid centered padded>
        <Grid.Row columns={3}>
          <Grid.Column textAlign="center" mobile={16} tablet={10} computer={6}>
            {_.map(brackets, bracket => (<BracketHistory key={bracket.id} bracket={bracket}/>))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Page>
  );
}

export default BracketHistoryList;
