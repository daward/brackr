import MatchVote from "../containers/matchvote"
import EndTournament from "../containers/endtournament"
import EndRound from "../containers/endround"
import React from 'react'
import Page from '../containers/page'

const VotingPage = ({ data }) => {
  return (
    <Page>
      <EndRound data={data} />
      <MatchVote data={data} />
      <EndTournament data={data} />
    </Page>);
}

export default VotingPage;