import React, { Component } from 'react'
import { Menu, Segment, Sidebar, Icon, Button } from 'semantic-ui-react'
import Share from "./share"
import DocumentTitle from 'react-document-title'
import browserHistory from '../history'

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
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='create' onClick={() => browserHistory.push(`/create`)}>
              <Icon name='compose' />
              Create
            </Menu.Item>
            <Menu.Item name='mybrackets' onClick={() => browserHistory.push(`/brackets`)}>
              <Icon name='bookmark outline' />
              My Brackets
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Menu size="mini" fluid widths={3} borderless>
              <Menu.Menu position='left' style={{ paddingLeft: "15px" }}>
                <Menu.Item>
                  <Button icon="sidebar" onClick={this.toggleVisibility} />
                </Menu.Item>
              </Menu.Menu>

              <Menu.Item header content={buildHeading(this.props)} />

              <Menu.Menu position='right'>
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