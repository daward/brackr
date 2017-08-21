import React from 'react';
import CreateEntry from './createentry'
import _ from "lodash";

const CreateEntrySet = ({ contestantGroupId,   contestants, onContestantChange, addPhotos, setPhoto }) => {
  let index = 0;
  return (
    <div>
      {
        _.map(contestants, contestant => {
          index++
          return (
            <CreateEntry
              key={index.toString()}
              index={index}
              contestantGroupId={contestantGroupId}
              contestant={contestant}
              checkNew={e => onContestantChange(e.target.id, e.target.value)}
              addPhotos={addPhotos}
              setPhoto={setPhoto} />)
        })
      }
    </div>);
}

export default CreateEntrySet;