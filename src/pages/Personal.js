import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../components/GlobalState';
import createNotes from '../components/Notes';

const Notes = () =>
  createNotes(['comma separated example: English, French, ...']);

export default () => {
  const [globalState, setGlobalState] = useContext(GlobalStateContext);
  const [personal, setPersonal] = useState(globalState.personal);
  const onPersonalChange = (event) => {
    let { field } = event.target.dataset;
    let newPersonalValue = { ...personal, [field]: event.target.value };
    setPersonal(newPersonalValue);
    setGlobalState('personal', newPersonalValue);
  };
  return (
    <>
      <div className="section">
        <label htmlFor="personal-name">My full name</label>
        <br />
        <input
          type="text"
          id="personal-name"
          data-field="fullName"
          autoFocus={true}
          minLength={0}
          maxLength={50}
          value={personal.fullName || ''}
          onChange={onPersonalChange}
        />
        <label htmlFor="personal-languages">
          Languages I speak <span>(comma separated)</span>
        </label>
        <br />
        <input
          type="text"
          id="personal-languages"
          data-field="languagesSpoken"
          minLength={0}
          maxLength={50}
          value={personal.languagesSpoken || ''}
          onChange={onPersonalChange}
        />
        <label htmlFor="personal-hobbies">
          My hobbies <span>(comma separated)</span>
        </label>
        <br />
        <input
          type="text"
          id="personal-hobbies"
          data-field="hobbies"
          minLength={0}
          maxLength={50}
          value={personal.hobbies || ''}
          onChange={onPersonalChange}
        />
        <p>
          <a className="button" href="#programming">Next</a>
        </p>
      </div>
      <div className="section">
        <Notes />
      </div>
    </>
  );
};
