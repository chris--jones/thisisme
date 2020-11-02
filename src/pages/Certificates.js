import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../components/GlobalState';
import createNotes from '../components/Notes';

const Notes = () =>
  createNotes([
    'only up to 2 inner cards.',
    'if necessary, type the name of the organization in the title.',
  ]);

export default () => {
  const [globalState, setGlobalState] = useContext(GlobalStateContext);
  const [certificates, setCertificates] = useState(globalState.certificates);
  const onCertificatesChange = (event) => {
    let { field } = event.target.dataset;
    let newCertificatesValue = { ...certificates, [field]: event.target.value };
    setCertificates(newCertificatesValue);
    setGlobalState('certificates', newCertificatesValue);
  };
  return (
    <>
      <div className="section">
        <label htmlFor="certificate-title">Certificate title</label>
        <br />
        <input
          type="text"
          id="certificate-title"
          data-field="title"
          autoFocus={true}
          minLength={0}
          maxLength={50}
          value={certificates.title || ''}
          onChange={onCertificatesChange}
        />
        <label htmlFor="certificate-id">Certificate ID</label>
        <br />
        <input
          type="text"
          id="certificate-id"
          data-field="id"
          minLength={0}
          maxLength={50}
          value={certificates.id || ''}
          onChange={onCertificatesChange}
        />
        <label htmlFor="certificate-received">
          Certificate received date <span>(MM/YYYY-MM/YYYY) or (YYYY/YYYY)</span>
        </label>
        <br />
        <input
          type="text"
          id="certificate-received"
          data-field="received"
          minLength={0}
          maxLength={50}
          value={certificates.received || ''}
          onChange={onCertificatesChange}
        />
        <p>
          <a href="#result">Result</a>
        </p>
        <p>each form corresponds to each inner card.</p>
      </div>
      <div className="section">
        <Notes />
      </div>
    </>
  );
};
