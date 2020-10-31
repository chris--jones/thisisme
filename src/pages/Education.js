import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../components/GlobalState';
import { NavigationButton } from '../components/Navigation';
import createNotes from '../components/Notes';

const Notes = () =>
  createNotes(
    [
      'only up to 2 inner cards.',
      'add "Present" if necessary (eg. 04/2000-Present).',
    ],
    {
      optional: true,
      privacy: true,
    },
  );

export default () => {
  const [globalState, setGlobalState] = useContext(GlobalStateContext);
  const [education, setEducation] = useState(globalState.education);
  const onEducationChange = (event) => {
    let { field } = event.target.dataset;
    let newEducationValue = { ...education, [field]: event.target.value };
    setEducation(newEducationValue);
    setGlobalState('education', newEducationValue);
  };
  return (
    <>
      <div className="section">
        <label htmlFor="education">College name</label>
        <br />
        <input
          type="text"
          id="education"
          data-field="collegeName"
          autoFocus={true}
          minLength={0}
          maxLength={50}
          value={education.collegeName || ''}
          onChange={onEducationChange}
        />
        <label htmlFor="education">Career title</label>
        <br />
        <input
          type="text"
          id="education"
          data-field="careerTitle"
          minLength={0}
          maxLength={50}
          value={education.careerTitle || ''}
          onChange={onEducationChange}
        />
        <label htmlFor="education">
          Career years <span>(MM/YYYY-MM/YYYY) or (YYYY/YYYY)</span>
        </label>
        <br />
        <input
          type="text"
          id="education"
          data-field="careerYears"
          minLength={0}
          maxLength={50}
          value={education.careerYears || ''}
          onChange={onEducationChange}
        />
        <p>
          <NavigationButton to="job" content="Next" />
        </p>
        <p>
          each form corresponds to each inner card.
        </p>
      </div>
      <div className="section">
        <Notes />
      </div>
    </>
  );
};
