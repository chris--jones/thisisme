import React from 'react';
import { Link } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Personal() {
    const [valuePersonalFullname, setValuePersonalFullname] = useLocalStorage(
        'personalFullnameValueStored'
    );
    const valueChangePersonalFullname = event => setValuePersonalFullname(event.target.value);

    const [valuePersonalLanguages, setValuePersonalLanguages] = useLocalStorage(
        'personalLanguagesValueStored'
    );
    const valueChangePersonalLanguages = event => setValuePersonalLanguages(event.target.value);

    const [valuePersonalHobbies, setValuePersonalHobbies] = useLocalStorage(
        'personalHobbiesValueStored'
    );
    const valueChangePersonalHobbies = event => setValuePersonalHobbies(event.target.value);

    const personalLanguagesPositionTitle = (valuePersonalFullname === '') ? 36 : 90;
    const personalLanguagesPositionText = (valuePersonalFullname === '') ? 60 : 114;
    const personalHobbiesPositionTitle = (valuePersonalFullname === '' && valuePersonalLanguages === '') ? 36 : 144 && (valuePersonalLanguages === '') ? 90 : 144 && (personalLanguagesPositionTitle === 36) ? 90 : 144;
    const personalHobbiesPositionText = (valuePersonalFullname === '' && valuePersonalLanguages === '') ? 60 : 168 && (valuePersonalLanguages === '') ? 114 : 168 && (personalLanguagesPositionText === 60) ? 114 : 168;

    const personalFullnameText = (valuePersonalFullname === '') ? null : <text x="25" y="36"><tspan x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My full name</tspan><tspan x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valuePersonalFullname}</tspan></text>;
    const personalLanguagesText = (valuePersonalLanguages === '') ? null : <text x="25" y="36"><tspan x="25" y={personalLanguagesPositionTitle} fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Languages I speak</tspan><tspan x="25" y={personalLanguagesPositionText} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valuePersonalLanguages}</tspan></text>;
    const personalHobbiesText = (valuePersonalHobbies === '') ? null : <text x="25" y="36"><tspan x="25" y={personalHobbiesPositionTitle} fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My hobbies</tspan><tspan x="25" y={personalHobbiesPositionText} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valuePersonalHobbies}</tspan></text>;

    const imgHeight = (valuePersonalFullname === '' && valuePersonalLanguages === '' && valuePersonalHobbies === '') ? 26 : (valuePersonalFullname === '' && valuePersonalLanguages === '') || (valuePersonalFullname === '' && valuePersonalHobbies === '') || (valuePersonalLanguages === '' && valuePersonalHobbies === '') ? 82 : (valuePersonalFullname === '' || valuePersonalLanguages === '' || valuePersonalHobbies === '') ? 138 : 194;

    const svgImagePersonal = (
        <svg width="495" height={imgHeight} viewBox={`0 0 495 ${imgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2" />
            {personalFullnameText}
            {personalLanguagesText}
            {personalHobbiesText}
        </svg>
    );

    const svgImagePersonalString = renderToString(svgImagePersonal);
    localStorage.setItem('svgImagePersonalStored', svgImagePersonalString);


    return (
        <>
            <Navigation />
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <div id="form-wrapper">
                            <form>
                                <div>
                                    <label htmlFor="fullnameValue">My full name</label><br />
                                    <input onChange={valueChangePersonalFullname} value={valuePersonalFullname} type="text" id="fullnameValue" name="fullnameValue" minLength="0" maxLength="40" />
                                </div>
                                <div>
                                    <label htmlFor="languagesValue">Languages I speak <span>(comma separated)</span></label><br />
                                    <input onChange={valueChangePersonalLanguages} value={valuePersonalLanguages} type="text" id="languagesValue" name="languagesValue" minLength="0" maxLength="40" />
                                </div>
                                <div>
                                    <label htmlFor="hobbiesValue">My hobbies <span>(comma separated)</span></label><br />
                                    <input onChange={valueChangePersonalHobbies} value={valuePersonalHobbies} type="text" id="hobbiesValue" name="hobbiesValue" minLength="0" maxLength="40" />
                                </div>
                            </form>
                        </div>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br /><span>*</span> comma separated example: English, French, ...<br /><span>*</span> for information about data, see <Link to="/privacy-policy">Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div id="svg-wrapper">
                    {svgImagePersonal}
                    <p id="preview-text">preview</p>
                </div>
            </div>
        </>
    );
}

export default Personal;