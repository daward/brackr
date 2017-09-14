import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import PhotoSearchContent from '../containers/photosearch'

class PhotoSearch extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  render() {
    return (<Modal
      open={this.state.modalOpen}
      trigger={<Button content="More" icon="search" fluid onClick={this.handleOpen} />}
      size='small' >
      <Modal.Header>
        Find an image
    </Modal.Header>
      <Modal.Content>
        <PhotoSearchContent />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.handleClose} content="Close" />
      </Modal.Actions>
    </Modal>)
  }
}

export default PhotoSearch