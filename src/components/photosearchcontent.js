import React, { Component } from 'react'
import { Input, Grid, Container } from 'semantic-ui-react'
import PhotoSet from '../containers/photoset'

class PhotoSearchBox extends Component {

  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Row>
            <Grid.Column computer={8}>
              <Input
                action={{ content: 'Add', onClick: () => this.props.setPhoto(this.refs.photoUrl.inputRef.value) }}
                placeholder='Custom URL...'
                size="tiny"
                ref="photoUrl" />
            </Grid.Column>
            <Grid.Column computer={8}>
              <Input
                fluid
                action={{ icon: 'search', onClick: () => this.props.searchPhotos(this.refs.searchTerm.inputRef.value) }}
                placeholder='Search...'
                size="tiny"
                ref="searchTerm" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column>
              <PhotoSet type="searchPhotos" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default PhotoSearchBox