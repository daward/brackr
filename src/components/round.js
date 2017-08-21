import React from 'react'
import Page from './page'
import _ from "lodash"
import { Segment, Button, Grid } from 'semantic-ui-react'
import MatchPlayer from './matchplayer'

const Round = ({ round, idx, bracketId, onRoundChange, onReturn }) => {
  return (
    <Page title={`Round ${idx + 1}`}>

      <Grid centered>
        <Grid.Row>
          <Grid.Column textAlign="center" mobile={16} tablet={8} computer={6}>
            <Button icon="reply" onClick={() => onReturn()} />
            <Button primary={true} onClick={() => onRoundChange(idx - 1)}>
              Previous
            </Button>
            <Button primary={true} onClick={() => onRoundChange(idx + 1)}>
              Next
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" mobile={16} tablet={8} computer={6}>
            {_.map(round, match => (
              <Segment vertical fluid textAlign="center">
                <MatchPlayer player={match[0]} bye={match[1].data.slug} />
                <MatchPlayer player={match[1]} bye={match[0].data.slug} />
              </Segment>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Page>);
}

export default Round;