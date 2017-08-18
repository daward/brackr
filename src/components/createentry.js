import React, { Component } from 'react';
import { Input, Button, Container } from 'semantic-ui-react'
import AddPhoto from './addphoto'

const CreateEntry = ({ index, contestant, checkNew, addPhotos, setPhoto }) => {
  let action = {
    color: contestant.image ? "green" : "",
    icon: 'image',
    onClick: () => addPhotos(index - 1, contestant)
  }

  return (
    <span>
      <Input
        fluid
        id={index.toString()}
        key={index.toString()}
        label={{ content: index }}
        size="medium"
        defaultValue={contestant.text}
        onChange={e => checkNew(e)}
        action={action}
        actionPosition='right' />
        <AddPhoto contestant={contestant} setPhoto={(image) => setPhoto(index - 1, image)} />
    </span>
  );
}

export default CreateEntry;
