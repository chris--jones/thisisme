import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../components/GlobalState';
import { NavigationButton } from '../components/Navigation';
import createNotes from '../components/Notes';

const Notes = () => createNotes(['comma separated example: Docker, Git, ...']);

export default () => {
  const [globalState, setGlobalState] = useContext(GlobalStateContext);
  const [technologies, setTechnologies] = useState(globalState.technologies);
  const onTechnologyChange = (event) => {
    let newTechnologiesValue = event.target.value;
    setTechnologies(newTechnologiesValue);
    setGlobalState('technologies', newTechnologiesValue);
  };
  return (
    <>
      <div className="section">
        <label htmlFor="technologies">
          Technologies I use <span>(comma separated)</span>
        </label>
        <br />
        <input
          type="text"
          id="technologies"
          autoFocus={true}
          minLength={0}
          maxLength={50}
          value={technologies || ''}
          onChange={onTechnologyChange}
        />
        <p>
          <NavigationButton to="education" content="Next" />
        </p>
      </div>
      <div className="section">
        <Notes />
      </div>
    </>
  );
};
