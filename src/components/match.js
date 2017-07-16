import React, { Component } from 'react';
import _ from "lodash"

class Match extends Component {
  render() {
    if(this.props.tournamentOver) {
      return (
        <div>{this.props.players[0].data} wins!</div>
      );
    }
    if(this.props.roundOver) {
      return (
        <div onClick={() => this.props.onClose(this.props.bracketId)}>Round Over</div>
      );
    }
    return (
      <div>
        Bracket: {this.props.bracketId} / Match: {this.props.matchId} <br/>
        --------------------------------

        {this.props.players.map((player, i) => <span key={i}>
          {!!i && "v."}
          <div onClick={() => this.props.onVote(this.props.bracketId, this.props.matchId, player.seed)}>{player.data}</div>
        </span>)}
      </div>
    );
  }
}

export default Match;
