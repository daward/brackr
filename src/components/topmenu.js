import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import Share from "./share"

const TopMenu = ({ votingId, currentRound, totalRounds }) => {
  return (
    <Menu size="small" borderless>
      <Menu.Item content={`Round ${currentRound} of ${totalRounds}`} />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Share votingId={votingId} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default TopMenu