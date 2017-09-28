import React, { Component } from 'react'
import { Segment, Sidebar } from 'semantic-ui-react'
import DocumentTitle from 'react-document-title'
import TopMenu from './topmenu'
import PageSidebarMenu from './pagesidebarmenu'

class Page extends Component {

  state = { visible: false }

  render() {
    const { visible } = this.state
    return (
      <DocumentTitle title={`Brackr - ${this.props.title}`}>
        <Sidebar.Pushable as={Segment} basic>
          <PageSidebarMenu visible={visible} />
          <Sidebar.Pusher>
            <TopMenu toggleVisibility={() => this.setState({ visible: !this.state.visible })}
              title={this.props.title}
              currentRound={this.props.currentRound}
              totalRounds={this.props.totalRounds}
              bracketId={this.props.bracketId}>
              {this.props.children}
            </TopMenu>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </DocumentTitle>
    )
  }
}

export default Page