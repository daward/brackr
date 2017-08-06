import React, { Component } from 'react';
import Link from './link'
import { Input, Button, Grid, Divider } from 'semantic-ui-react'
import Page from "./page"

class BracketNav extends Component {

  render() {
    return (
      <Page title="Social Tournament Voting">
        <Grid centered padded>
          <Grid.Row>
            <Grid.Column textAlign="center" mobile={16} tablet={10} computer={6}>

              <Input
                action={<Link to={`/bracket/${this.props.bracketId}`}>
                  <Button>Vote</Button>
                </Link>}
                placeholder='Enter your bracket code'
                defaultValue={this.props.bracketId}
                onChange={this.props.bracketCodeUpdate}
              />

              <Divider horizontal>Or</Divider>

              <Link to="/create">
                <Button primary>Create a new bracket</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Page>
    );
  }
}

export default BracketNav;
