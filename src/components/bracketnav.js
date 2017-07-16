import React, { Component } from 'react';
import _ from "lodash";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router'

class BracketNav extends Component {

  render() {
    return (<div>
      <TextField
        hintText="Enter your bracket code"
        onChange={this.props.bracketCodeUpdate}
      />
      <br />
      <Link to={`/bracket/${this.props.bracketId}`}>
        <RaisedButton label="Vote" />
      </Link>
      &nbsp;Or&nbsp;
      <Link to="/create">
        <RaisedButton label="Create a new bracket" />
      </Link>
    </div>);
  }
}

export default BracketNav;
