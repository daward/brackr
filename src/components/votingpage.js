import MatchVote from "../containers/matchvote"
import EndRound from "../containers/endround"
import EndTournament from "../containers/endtournament"
import React, { Component } from 'react'

const VotingPage = () => {
  return (
    <div>
      <MatchVote />
      <EndRound />
      <EndTournament />
    </div>);
}

export default VotingPage;