import React, { Component } from 'react';
import _ from "lodash";
import { Input, Button, Grid } from 'semantic-ui-react'
import Page from './page'

class Create extends Component {

  checkNew(changeEvent) {
    this.props.onContestantChange(changeEvent.target.id, changeEvent.target.value);
  }

  render() {
    let index = 0;
    return (
      <Page title="Create a bracket">
        <Grid centered padded doubling >
          <Grid.Row>
            <Grid.Column mobile={14} tablet={8} computer={6}>
              <Input
                ref="title"
                fluid
                key="Bracket Title"
                label="Title"
                size="medium"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={14} tablet={8} computer={6}>
              {
                _.map(this.props.contestants, contestant => {
                  index++
                  return (
                    <Input
                      fluid
                      id={index.toString()}
                      key={index.toString()}
                      label={{ content: index }}
                      size="medium"
                      defaultValue={contestant}
                      onChange={(e) => this.checkNew(e)} />)
                })
              }
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column mobile={14} tablet={8} computer={6} textAlign="center">
              <Button primary={true} 
                onClick={() => this.props.commit(
                  this.refs.title.inputRef.value, 
                  this.props.contestants)}>Start the voting!</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid >
      </Page>
    );
  }
}

export default Create;
