import React from 'react';
import { Input } from 'semantic-ui-react'
import AddPhoto from './addphoto'

const CreateEntry = ({ contestantGroupId, index, contestant, userId, checkNew, addPhotos }) => {
  let action = {
    color: contestant.image ? "green" : "black",
    icon: 'image',
    onClick: () => addPhotos({ photoIdx: index - 1, contestant })
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

      <AddPhoto contestant={contestant} />
    </span>
  );
}

export default CreateEntry;
