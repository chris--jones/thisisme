import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../components/GlobalState';
import { NavigationButton } from '../components/Navigation';
import createNotes from '../components/Notes';

const Notes = () =>
  createNotes(
    [
      'comma separated example: JavaScript, Ruby, ...',
      'non-programming languages are also included (eg. HTML)',
    ],
    {
      optional: true,
      privacy: true,
    },
  );

export default () => {
  const [globalState, setGlobalState] = useContext(GlobalStateContext);
  const [programming, setProgramming] = useState(globalState.programming);
  const onProgrammingChange = (event) => {
    let newProgrammingValue = event.target.value;
    setProgramming(newProgrammingValue);
    setGlobalState('programming', newProgrammingValue);
  };
  return (
    <>
      <div className="section">
        <label htmlFor="programming">
          Programming languages I code in <span>(comma separated)</span>
        </label>
        <br />
        <input
          type="text"
          id="programming"
          autoFocus={true}
          minLength={0}
          maxLength={50}
          value={programming || ''}
          onChange={onProgrammingChange}
        />
        <p>
          <NavigationButton to="technologies" content="Next" />
        </p>
      </div>
      <div className="section">
        <Notes />
      </div>
    </>
  );
};
