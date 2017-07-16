import React, { Component } from 'react';
import _ from "lodash";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Create extends Component {

  checkNew(changeEvent) {
    this.props.onContestantChange(changeEvent.target.id, changeEvent.target.value);
  }

  render() {
    let index = 0;
    return (
      <div>
        {
          _.map(this.props.contestants, contestant => {
            index++
            return (<div>
              <TextField
              id={index.toString()}
              key={index}
              value={contestant}
              hintText={`Contestant ${index}`}
              onChange={(e) => this.checkNew(e)} />
              <br/>
              </div>)
          })
        }
        <br />
        <RaisedButton label="Start the voting!" onClick={() => this.props.commit(this.props.contestants)}/>
      </div>
    );
  }
}

export default Create;
