import React, { Component } from 'react';
import { Button, Icon, Grid, Message, Modal } from 'semantic-ui-react'
import Page from '../containers/page'

class EndRound extends Component {
  constructor(props) {
    super();
    if (props && props.pollRound && props.round) {
      props.pollRound(props.round);
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.pollRound(nextProps.round);
  }

  render() {
    let content;
    if (this.props.admin) {
      content = (
        <Grid.Column textAlign="center" mobile={16} tablet={10} computer={6}>
          <Message icon>
            <Icon name='warning' />
            <Message.Content>
              <Message.Header>{this.props.votes} votes total have been received.</Message.Header>
              If this seems like too few votes, do not close the round, others may still be voting.
              The page will automatically update as more users vote.
            </Message.Content>
          </Message>

          <Modal
            trigger={<Button primary={true} content="Close voting and move to next round" />}
            size='small'
            header="Close the voting"
            content="Are you sure you want to close the voting in this round?"
            actions={[
              { key: 'no', content: 'No', color: 'red'},
              {
                key: 'yes',
                content: 'Yes',
                color: 'green',
                onClick: () => this.props.onClose(this.props.bracketId)
              },
            ]} />
        </Grid.Column>
      )
    } else {
      content = (<Grid.Column textAlign="center" width={6}>
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
      <Page>
        <Grid centered padded>
          <Grid.Row stretched>
            {content}
          </Grid.Row>
        </Grid>
      </Page>
    );
  }
}

export default EndRound;