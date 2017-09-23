import React, { Component } from 'react'
import { Segment, Sidebar } from 'semantic-ui-react'
import DocumentTitle from 'react-document-title'
import PageSidebar from './pagesidebar'
import PageSidebarMenu from './pagesidebarmenu'

class Page extends Component {

  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <DocumentTitle title={`Brackr - ${this.props.title}`}>
        <Sidebar.Pushable as={Segment} basic>
          <PageSidebarMenu visible={visible} />
          <PageSidebar toggleVisibility={this.toggleVisibility}>
            {this.props.children}
          </PageSidebar>

        </Sidebar.Pushable>
      </DocumentTitle>
    )
  }
}

export default Page