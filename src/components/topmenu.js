import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import Login from '../containers/login'
import Share from "./share"

const TopMenu = ({ toggleVisibility, title, currentRound, totalRounds, bracketId }) => {

  const buildHeading = () => {
    let heading = title;

    if (currentRound && totalRounds) {
      heading = `${heading} (${currentRound} of ${totalRounds})`
    }

    return heading;
  }

  return (
    <Menu size="tiny" fluid borderless>
      {/* Hamburger menu */}
      <Menu.Menu>
        <Menu.Item>
          <Button icon="sidebar" onClick={toggleVisibility} />
        </Menu.Item>
      </Menu.Menu>

      <Menu.Menu position='left'>
        <Menu.Item header content={buildHeading()} />
      </Menu.Menu>

      <Menu.Menu position='right'>
        <Menu.Item content={<Login />} position="left" />
        <Menu.Item content={<Share votingId={bracketId} />} />
      </Menu.Menu>
    </Menu>
  )
}

export default TopMenu;