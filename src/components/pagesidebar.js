import React from 'react'
import { Menu, Sidebar, Icon } from 'semantic-ui-react'
import browserHistory from '../history'

const PageSidebar = ({ visible }) => {
  return (
    <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
      <Menu.Item name='create' onClick={() => browserHistory.push(`/create`)}>
        <Icon name='compose' />
        Create
            </Menu.Item>
      <Menu.Item name='mybrackets' onClick={() => browserHistory.push(`/brackets`)}>
        <Icon name='bookmark outline' />
        My Brackets
            </Menu.Item>
    </Sidebar>);
}

export default PageSidebar;