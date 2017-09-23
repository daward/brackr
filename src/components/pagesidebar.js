import React, { Component } from 'react'
import { Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import Login from '../containers/login'
import Share from "./share"

class PageSidebar extends Component {

  render() {

    const buildHeading = ({ title, currentRound, totalRounds }) => {
      let heading = title;

      if (currentRound && totalRounds) {
        heading = `${heading} (${currentRound} of ${totalRounds})`
      }

      return heading;
    }

    return (
      <Sidebar.Pusher>
        <Menu size="tiny" fluid borderless>
          {/* Hamburger menu */}
          <Menu.Menu>
            <Menu.Item>
              <Button icon="sidebar" onClick={this.props.toggleVisibility} />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position='left'>
            <Menu.Item header content={buildHeading(this.props)} />
          </Menu.Menu>

          <Menu.Menu position='right'>
            <Menu.Item content={<Login />} position="left" />
            <Menu.Item content={<Share votingId={this.props.id} />} />
          </Menu.Menu>
        </Menu>
        <Segment basic>
          {this.props.children}
        </Segment>
      </Sidebar.Pusher>
    )
  }
}

export default PageSidebar;