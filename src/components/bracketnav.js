import React, { Component } from 'react';
import _ from "lodash";
import Link from './link'
import { Input, Button, Grid, Divider } from 'semantic-ui-react'
import Page from "./page"

class BracketNav extends Component {

  render() {
    return (
      <span>
        <Page title="Social Tournament Voting">
          <Grid centered padded>
            <Grid.Row columns={3}>
              <Grid.Column textAlign="center">

                <Input
                  action={<Link to={`/bracket/${this.props.bracketId}`}>
                    <Button floating>Vote</Button>
                  </Link>}
                  actionPosition='right'
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
      </span>
    );
  }
}

export default BracketNav;
