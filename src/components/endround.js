import React, { Component } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react'

const closeIcon = <Icon name="forward" />;

const EndRound = ({ active, bracketId, votes, onClose }) => {
  if (!active) {
    return (<span />)
  }
  return (
    <Grid centered>
      <Grid.Row stretched>
        <Grid.Column textAlign="center">
          <p>Your votes have been entered for this round</p>
          <br />
          <p>{votes} votes total have been received.</p>
          <p>
            <Icon name="warning" />
            &nbsp;If this seems like too few votes, do not close the round, refresh the page and wait for more votes</p>

          <Button
            primary={true}
            onClick={() => onClose(bracketId)}
            icon={closeIcon}>
            Close voting and move to next round
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EndRound;