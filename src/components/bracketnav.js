import React, { Component } from 'react';
import _ from "lodash";
import { Link } from 'react-router'
import { Input, Button } from 'semantic-ui-react'

class BracketNav extends Component {

  render() {
    return (<div>
      <Input
        placeholder="Enter your bracket code"
        onChange={this.props.bracketCodeUpdate}
      />
      <br />
      <Link to={`/bracket/${this.props.bracketId}`}>
        <Button>Vote</Button>
      </Link>
      &nbsp;Or&nbsp;
      <Link to="/create">
        <Button>Create a new bracket</Button>
      </Link>
    </div>);
  }
}

export default BracketNav;
