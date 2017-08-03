import React, { Component } from 'react';
import { Button, Icon, Label, Table, Grid } from 'semantic-ui-react'

const EndTournament = ({ winners, admin, onRestart, onRerun }) => {
  if (!winners) {
    return (<span />);
  }
  return (
    <Grid textAlign="center" centered padded>
      <Grid.Row stretched>
        <Grid.Column padded stretched mobile={16} tablet={10} computer={6}>
          <Table unstackable>
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
      <Grid.Row stretched >
        <Grid.Column mobile={8} tablet={5} computer={3}>
          <Button
            primary
            content='Start another'
            icon='clone'
            onClick={() => onRestart()} />
        </Grid.Column>
        <Grid.Column mobile={8} tablet={5} computer={3}>
          <Button
            primary
            disabled={!admin}
            onClick={() => onRerun()}
            content='Next Best'
            icon='trophy' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EndTournament;