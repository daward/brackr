import React from 'react';
import { Input, Button, Grid } from 'semantic-ui-react'
import Page from './page'
import CreateEntrySet from './createentryset'
import AddPhotos from '../containers/addphotos'

const Create = ({ contestantGroupId, contestants, title, addingPhotos, onContestantChange, commit, addPhotos, setPhoto, changeTitle }) => {
  return (
    <Page title="Create a bracket">
      <Grid centered padded doubling >
        <Grid.Row>
          <Grid.Column mobile={14} tablet={8} computer={6}>
            <Input
              fluid
              key={"Bracket Title" + contestantGroupId}
              label="Title"
              size="medium"
              defaultValue={title}
              onChange={e => changeTitle(e.target.value)} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={14} tablet={8} computer={6}>
            {
              (addingPhotos ?
                <AddPhotos /> :
                <CreateEntrySet
                  key="CreateEntrySet"
                  contestants={contestants}
                  contestantGroupId={contestantGroupId}
                  onContestantChange={onContestantChange}
                  addPhotos={addPhotos}
                  setPhoto={setPhoto} />)
            }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column mobile={14} tablet={8} computer={6} textAlign="center">
            <Button primary={true}
              onClick={() => commit(
                title,
                contestants)}>Start the voting!</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid >
    </Page>
  );
}

export default Create;
