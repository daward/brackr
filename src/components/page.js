import React, { Component } from 'react'
import { Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import Share from "./share"
import DocumentTitle from 'react-document-title'
import Login from '../containers/login'
import PageSidebar from './pagesidebar'

const buildHeading = ({ title, currentRound, totalRounds }) => {
  let heading = title;

  if (currentRound && totalRounds) {
    heading = `${heading} (${currentRound} of ${totalRounds})`
  }

  return heading;
}

class Page extends Component {

  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <DocumentTitle title={`Brackr - ${this.props.title}`} />
        <Sidebar.Pushable as={Segment} basic>
          <PageSidebar visible={visible} />
          <Sidebar.Pusher>
            <Menu size="tiny" fluid borderless>
              {/* Hamburger menu */}
              <Menu.Menu>
                <Menu.Item>
                  <Button icon="sidebar" onClick={this.toggleVisibility} />
                </Menu.Item>
              </Menu.Menu>

              <Menu.Menu position='left'>
                <Menu.Item header content={buildHeading(this.props)} />
              </Menu.Menu>

              <Menu.Menu position='right'>
                <Menu.Item content={<Login />} position="left" />
                <Menu.Item content={<Share votingId={this.props.votingId} />} />
              </Menu.Menu>
            </Menu>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Page