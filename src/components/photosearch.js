import React, { Component } from 'react'
import { Button, Header, Image, Modal, Input } from 'semantic-ui-react'

class PhotoSearch extends Component {

  render() {
    return (<Modal
      trigger={<Button content="Search" icon="search" fluid />}
      size='small'>
      <Modal.Header>
        Find an image
    </Modal.Header>
      <Modal.Content>
        <Input
          fluid
          label={{ content: "Custom URL" }}
          size="medium"
          ref="photoUrl" />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => {
          console.log(this.refs.photoUrl.inputRef.value)
          this.props.setPhoto(this.refs.photoUrl.inputRef.value)
        }} content="OK" />
      </Modal.Actions>
    </Modal>)
  }
}

export default PhotoSearch