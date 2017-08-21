import React from 'react';
import { Input } from 'semantic-ui-react'
import AddPhoto from './addphoto'

const CreateEntry = ({ contestantGroupId, index, contestant, checkNew, addPhotos, setPhoto }) => {
  let action = {
    color: contestant.image ? "green" : "black",
    icon: 'image',
    onClick: () => addPhotos(index - 1, contestant)
  }

  return (
    <span>
      <Input
        fluid
        id={index.toString()}
        key={index.toString() + "" + contestantGroupId}
        label={{ content: index }}
        size="medium"
        defaultValue={contestant.text}
        onChange={e => checkNew(e)}
        action={action} />
        <AddPhoto contestant={contestant} setPhoto={(image) => setPhoto(index - 1, image)} />
    </span>
  );
}

export default CreateEntry;
