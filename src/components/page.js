import React, { Component } from 'react'
import { Menu, Segment, Sidebar, Icon, Image, Container } from 'semantic-ui-react'
import Share from "./share"
import Link from "./link"
import DocumentTitle from 'react-document-title'
import { self } from '../constants'

const buildMenuItems = ({ votingId, title, currentRound, totalRounds }) => {
  const menuItems = []
  if (currentRound && totalRounds) {
    menuItems.push(<Menu.Item content={`Round ${currentRound} of ${totalRounds}`} />);
  }
  if (title) {
    menuItems.push(<Menu.Item content={title} position='right' />);
  }
  if (votingId) {
    menuItems.push(
      <Menu.Menu position='right'>
        <Menu.Item>
          <Share votingId={votingId} />
        </Menu.Item>
      </Menu.Menu>
    );
  }
  return menuItems;
}

class Page extends Component {

  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {

    const { visible } = this.state
    return (
      <div>
        <DocumentTitle title={`Brackr - ${this.props.title}`} />

        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='create' onClick={() => window.location = (self + "/create")}>
              <Icon name='compose' />
              Create
            </Menu.Item>
            <Menu.Item name='mybrackets' onClick={() => window.location = (self + "/brackets")}>
              <Icon name='bookmark outline' />
              My Brackets
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment>
              <div>
                <Menu size="small" borderless fixed="top">
                  <Menu.Item icon="sidebar" onClick={this.toggleVisibility} />
                  {buildMenuItems(this.props)}
                </Menu>
              </div>

            </Segment>
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