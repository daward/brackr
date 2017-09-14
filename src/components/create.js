import React from 'react';
import { Input, Button, Grid } from 'semantic-ui-react'
import Page from './page'
import CreateEntrySet from './createentryset'

const Create = ({ contestantGroupId, contestants, title, userId, onContestantChange, save, start, addPhotos, changeTitle }) => {
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
            <CreateEntrySet
              key="CreateEntrySet"
              contestants={contestants}
              contestantGroupId={contestantGroupId}
              onContestantChange={onContestantChange}
              addPhotos={addPhotos} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column mobile={7} tablet={4} computer={3} textAlign="center">
            <Button primary={true}
              onClick={() => save({
                title,
                contestants,
                contestantGroupId,
                userId
              })}>Save</Button>
          </Grid.Column>
          <Grid.Column mobile={7} tablet={4} computer={3} textAlign="center">
            <Button primary={true}
              onClick={() => start({
                title,
                contestants,
                contestantGroupId,
                userId
              })}>Start the voting!</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid >
    </Page>
  );
}

export default Create;
