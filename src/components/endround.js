import React, { Component } from 'react';
import { Button, Icon, Grid, Message } from 'semantic-ui-react'

class EndRound extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (!this.props.active && nextProps.active) {
      nextProps.pollRound(nextProps.round);
    }
  }

  render() {
    if (!this.props.active) {
      return (<span />)
    }

    let content;
    if (this.props.admin) {
      content = (
        <Grid.Column textAlign="center">
          <Message icon>
            <Icon name='warning' />
            <Message.Content>
              <Message.Header>{this.props.votes} votes total have been received.</Message.Header>
              If this seems like too few votes, do not close the round, others may still be voting.
              The page will automatically update as more users vote.
            </Message.Content>
          </Message>

          <Button
            primary={true}
            onClick={() => this.props.onClose(this.props.bracketId)}
            content="Close voting and move to next round" />
        </Grid.Column>
      )
    } else {
      content = (<Grid.Column textAlign="center">
        <Message icon>
          <Icon name='check' />
          <Message.Content>
            <Message.Header>Thanks for voting! </Message.Header>
            Votes are still being collected.  This page will update automatically when the next round starts.
          </Message.Content>
        </Message>
      </Grid.Column>);
    }

    return (
      <Grid centered padded>
        <Grid.Row stretched columns={3}>
          {content}
        </Grid.Row>
      </Grid>
    );
  }
}

export default EndRound;