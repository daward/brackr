import React, { Component } from 'react';
import _ from "lodash"
import RaisedButton from 'material-ui/RaisedButton';

class Match extends Component {
  render() {
    if(this.props.tournamentOver) {
      return (
        <div>{this.props.players[0].data} wins!</div>
      );
    }
    if(this.props.roundOver) {
      return (
        <div>
        <div>Your votes have been entered for this round</div>
        <br/>
        <RaisedButton 
          onClick={() => this.props.onClose(this.props.bracketId)}
          label="Close voting and move to next round"/>
        </div>
      );
    }
    return (
      <div>
        Bracket: {this.props.bracketId} / Match: {this.props.matchId} <br/>
        --------------------------------

        {this.props.players.map((player, i) => <div key={i}>
          {!!i && <div>v.</div>}
          <RaisedButton 
            onClick={() => this.props.onVote(this.props.bracketId, this.props.matchId, player.seed)}
            label={player.data}/>
        </div>)}
      </div>
    );
  }
}

export default Match;
