import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../components/GlobalState';
import { NavigationButton } from '../components/Navigation';
import createNotes from '../components/Notes';

const Notes = () =>
  createNotes([
    'only up to 2 inner cards.',
    'add "Present" if necessary (eg. 04/2000-Present).',
  ]);

export default () => {
  const [globalState, setGlobalState] = useContext(GlobalStateContext);
  const [job, setJob] = useState(globalState.job);
  const onJobChange = (event) => {
    let { field } = event.target.dataset;
    let newJobValue = { ...job, [field]: event.target.value };
    setJob(newJobValue);
    setGlobalState('job', newJobValue);
  };
  return (
    <>
      <div className="section">
        <label htmlFor="job-company">Company name</label>
        <br />
        <input
          type="text"
          id="job-company"
          data-field="companyName"
          autoFocus={true}
          minLength={0}
          maxLength={50}
          value={job.companyName || ''}
          onChange={onJobChange}
        />
        <label htmlFor="job-position">Position</label>
        <br />
        <input
          type="text"
          id="job-position"
          data-field="position"
          minLength={0}
          maxLength={50}
          value={job.position || ''}
          onChange={onJobChange}
        />
        <label htmlFor="job-years">
          Job years <span>(MM/YYYY-MM/YYYY) or (YYYY/YYYY)</span>
        </label>
        <br />
        <input
          type="text"
          id="job-years"
          data-field="jobYears"
          minLength={0}
          maxLength={50}
          value={job.jobYears || ''}
          onChange={onJobChange}
        />
        <p>
          <NavigationButton to="certificates" content="Next" />
        </p>
        <p>each form corresponds to each inner card.</p>
      </div>
      <div className="section">
        <Notes />
      </div>
    </>
  );
};
