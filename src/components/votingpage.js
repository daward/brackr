import MatchVote from "../containers/matchvote"
import EndRound from "../containers/endround"
import EndTournament from "../containers/endtournament"
import Menu from "../containers/topmenu"
import React, { Component } from 'react'

const VotingPage = () => {
  return (
    <div>
      <Menu/>
      <MatchVote />
      <EndRound />
      <EndTournament />
    </div>);
}

export default VotingPage;