import React, { Component } from 'react';
import { Button, Icon, Label, Table, Grid } from 'semantic-ui-react'

const EndTournament = ({ winners, onRestart, onRerun }) => {
  if (!winners) {
    return (<span />);
  }
  return (

    <Grid textAlign="center" centered padded>
      <Grid.Row stretched>
        <Grid.Column width={6}>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell tooltip="Rank">Rank</Table.HeaderCell>
                <Table.HeaderCell tooltip="Contestant">Contestant</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {winners.map((row, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{row}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row stretched>
        <Grid.Column width={3}>
          <Button primary={true} onClick={() => onRestart()}>
            Start another tournament
              </Button>
        </Grid.Column>
        <Grid.Column width={3}>
          <Button primary={true} onClick={() => onRerun()}>
            Find next best contestant
              </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EndTournament;