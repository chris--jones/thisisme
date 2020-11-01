import React, { useContext } from 'react';
import { NavigationContext } from './Navigation';

const DEFAULT_OPTIONS = {
  privacy: true,
  optional: true,
}

export default (notes, options = DEFAULT_OPTIONS) => {
  const { setPage } = useContext(NavigationContext);
  const goPrivacy = () => setPage('privacy');
  return (
    <>
      <span className="label">Notes</span>
      <ul className="notes">
        {options.optional && <li>all inputs are optional</li>}
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
        <>
        {options.privacy && <li>for information about data, see <button className="link" onClick={goPrivacy}>Privacy Policy</button></li>}
        </>
      </ul>
    </>
  );
};
