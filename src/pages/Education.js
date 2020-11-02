import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../components/GlobalState';
import createNotes from '../components/Notes';

const Notes = () =>
  createNotes([
    'only up to 2 inner cards.',
    'add "Present" if necessary (eg. 04/2000-Present).',
  ]);

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
        <label htmlFor="education-college">College name</label>
        <br />
        <input
          type="text"
          id="education-college"
          data-field="collegeName"
          autoFocus={true}
          minLength={0}
          maxLength={50}
          value={education.collegeName || ''}
          onChange={onEducationChange}
        />
        <label htmlFor="education-career">Career title</label>
        <br />
        <input
          type="text"
          id="education-career"
          data-field="careerTitle"
          minLength={0}
          maxLength={50}
          value={education.careerTitle || ''}
          onChange={onEducationChange}
        />
        <label htmlFor="education-years">
          Career years <span>(MM/YYYY-MM/YYYY) or (YYYY/YYYY)</span>
        </label>
        <br />
        <input
          type="text"
          id="education-years"
          data-field="careerYears"
          minLength={0}
          maxLength={50}
          value={education.careerYears || ''}
          onChange={onEducationChange}
        />
        <p>
          <a href="#job">Next</a>
        </p>
        <p>each form corresponds to each inner card.</p>
      </div>
      <div className="section">
        <Notes />
      </div>
    </>
  );
};
