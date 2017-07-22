import React, { Component } from 'react';
import _ from "lodash";
import { Input, Button, Grid } from 'semantic-ui-react'

class Create extends Component {

  checkNew(changeEvent) {
    this.props.onContestantChange(changeEvent.target.id, changeEvent.target.value);
  }

  render() {
    let index = 0;
    return (
      <Grid centered padded>
        <Grid.Row stretched>
          <Grid.Column width={4}/>
          <Grid.Column key="1" width={4}>
            {
              _.map(this.props.contestants, contestant => {
                index++
                return (
                  <div>
                    <Input
                      id={index.toString()}
                      key={index.toString()}
                      label={index}
                      size="big"
                      defaultValue={contestant}
                      onChange={(e) => this.checkNew(e)} />
                    <br />
                  </div>)
              })
            }
            <br />
            <Button primary={true} onClick={() => this.props.commit(this.props.contestants)}>Start the voting!</Button>
          </Grid.Column>
          <Grid.Column width={4}/>
        </Grid.Row>
      </Grid >
    );
  }
}

export default Create;
