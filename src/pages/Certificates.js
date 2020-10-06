import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Certificates()                          //Creating the funtion which generate the Certificates of the user which takes all the values as constant   
{
    const [valueCertificatesTitle1, setValueCertificatesTitle1] = useLocalStorage(
        'certificatesTitleValueStored1'
    );
    const valueChangeCertificatesTitle1 = event => setValueCertificatesTitle1(event.target.value);

    const [valueCertificatesId1, setValueCertificatesId1] = useLocalStorage(
        'certificatesIdValueStored1'
    );
    const valueChangeCertificatesId1 = event => setValueCertificatesId1(event.target.value);

    const [valueCertificatesDate1, setValueCertificatesDate1] = useLocalStorage(
        'certificatesDateValueStored1'
    );
    const valueChangeCertificatesDate1 = event => setValueCertificatesDate1(event.target.value);

    const certificatesIdPositionTitle1 = (valueCertificatesTitle1 === '') ? 68 : 106;
    const certificatesIdPositionText1 = (valueCertificatesTitle1 === '') ? 84 : 122;
    const certificatesDatePositionTitle1 = (valueCertificatesTitle1 === '' && valueCertificatesId1 === '') ? 68 : 144 && (valueCertificatesId1 === '') ? 106 : 144 && (certificatesIdPositionTitle1 === 68) ? 106 : 144;
    const certificatesDatePositionText1 = (valueCertificatesTitle1 === '' && valueCertificatesId1 === '') ? 84 : 160 && (valueCertificatesId1 === '') ? 122 : 160 && (certificatesIdPositionText1 === 84) ? 122 : 160;

    const certificatesInnerCard1 = (valueCertificatesTitle1 !== '' || valueCertificatesId1 !== '' || valueCertificatesDate1 !== '') ? <rect x="25" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/> : null;

    const certificatesTitleText1 = (valueCertificatesTitle1 === '') ? null : <text x="30" y="67"><tspan x="30" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate title</tspan><tspan x="30" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesTitle1}</tspan></text>;
    const certificatesIdText1 = (valueCertificatesId1 === '') ? null : <text x="30" y="67"><tspan x="30" y={certificatesIdPositionTitle1} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate ID</tspan><tspan x="30" y={certificatesIdPositionText1} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesId1}</tspan></text>;
    const certificatesDateText1 = (valueCertificatesDate1 === '') ? null : <text x="30" y="67"><tspan x="30" y={certificatesDatePositionTitle1} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate received</tspan><tspan x="30" y={certificatesDatePositionText1} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesDate1}</tspan></text>;

    const [valueCertificatesTitle2, setValueCertificatesTitle2] = useLocalStorage(
        'certificatesTitleValueStored2'
    );
    const valueChangeCertificatesTitle2 = event => setValueCertificatesTitle2(event.target.value);

    const [valueCertificatesId2, setValueCertificatesId2] = useLocalStorage(
        'certificatesIdValueStored2'
    );
    const valueChangeCertificatesId2 = event => setValueCertificatesId2(event.target.value);

    const [valueCertificatesDate2, setValueCertificatesDate2] = useLocalStorage(
        'certificatesDateValueStored2'
    );
    const valueChangeCertificatesDate2 = event => setValueCertificatesDate2(event.target.value);

    const certificatesIdPositionTitle2 = (valueCertificatesTitle2 === '') ? 68 : 106;
    const certificatesIdPositionText2 = (valueCertificatesTitle2 === '') ? 84 : 122;
    const certificatesDatePositionTitle2 = (valueCertificatesTitle2 === '' && valueCertificatesId2 === '') ? 68 : 144 && (valueCertificatesId2 === '') ? 106 : 144 && (certificatesIdPositionTitle2 === 68) ? 106 : 144;
    const certificatesDatePositionText2 = (valueCertificatesTitle2 === '' && valueCertificatesId2 === '') ? 84 : 160 && (valueCertificatesId2 === '') ? 122 : 160 && (certificatesIdPositionText2 === 84) ? 122 : 160;

    const certificatesInnerCardPosition2 = (certificatesInnerCard1 === null) ? <rect x="25" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/> : <rect x="175" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>;
    const certificatesInnerCard2 = (valueCertificatesTitle2 !== '' || valueCertificatesId2 !== '' || valueCertificatesDate2 !== '') ? certificatesInnerCardPosition2 : null;

    const certificatesTitleText2 = (valueCertificatesTitle2 === '') ? null : <text x="180" y="67"><tspan x="180" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate title</tspan><tspan x="180" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesTitle2}</tspan></text> && (certificatesInnerCard1 === null) ? <text x="30" y="67"><tspan x="30" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate title</tspan><tspan x="30" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesTitle2}</tspan></text> : <text x="180" y="67"><tspan x="180" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate title</tspan><tspan x="180" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesTitle2}</tspan></text>;
    const certificatesIdText2 = (valueCertificatesId2 === '') ? null : <text x="180" y="67"><tspan x="180" y={certificatesIdPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate ID</tspan><tspan x="180" y={certificatesIdPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesId2}</tspan></text> && (certificatesInnerCard1 === null) ? <text x="30" y="67"><tspan x="30" y={certificatesIdPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate ID</tspan><tspan x="30" y={certificatesIdPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesId2}</tspan></text> : <text x="180" y="67"><tspan x="180" y={certificatesIdPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate ID</tspan><tspan x="180" y={certificatesIdPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesId2}</tspan></text>;
    const certificatesDateText2 = (valueCertificatesDate2 === '') ? null : <text x="180" y="67"><tspan x="180" y={certificatesDatePositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate received</tspan><tspan x="180" y={certificatesDatePositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesDate2}</tspan></text> && (certificatesInnerCard1 === null) ? <text x="30" y="67"><tspan x="30" y={certificatesDatePositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate received</tspan><tspan x="30" y={certificatesDatePositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesDate2}</tspan></text> : <text x="180" y="67"><tspan x="180" y={certificatesDatePositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate received</tspan><tspan x="180" y={certificatesDatePositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesDate2}</tspan></text>;

    const [valueCertificatesTitle3, setValueCertificatesTitle3] = useLocalStorage(
        'certificatesTitleValueStored3'
    );
    const valueChangeCertificatesTitle3 = event => setValueCertificatesTitle3(event.target.value);

    const [valueCertificatesId3, setValueCertificatesId3] = useLocalStorage(
        'certificatesIdValueStored3'
    );
    const valueChangeCertificatesId3 = event => setValueCertificatesId3(event.target.value);

    const [valueCertificatesDate3, setValueCertificatesDate3] = useLocalStorage(
        'certificatesDateValueStored3'
    );
    const valueChangeCertificatesDate3 = event => setValueCertificatesDate3(event.target.value);

    const certificatesIdPositionTitle3 = (valueCertificatesTitle3 === '') ? 68 : 106;
    const certificatesIdPositionText3 = (valueCertificatesTitle3 === '') ? 84 : 122;
    const certificatesDatePositionTitle3 = (valueCertificatesTitle3 === '' && valueCertificatesId3 === '') ? 68 : 144 && (valueCertificatesId3 === '') ? 106 : 144 && (certificatesIdPositionTitle3 === 68) ? 106 : 144;
    const certificatesDatePositionText3 = (valueCertificatesTitle3 === '' && valueCertificatesId3 === '') ? 84 : 160 && (valueCertificatesId3 === '') ? 122 : 160 && (certificatesIdPositionText3 === 84) ? 122 : 160;

    const certificatesInnerCardPosition3 = (certificatesInnerCard1 === null && certificatesInnerCard2 === null) ? <rect x="25" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/> : (certificatesInnerCard1 === null || certificatesInnerCard2 === null) ? <rect x="175" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/> : <rect x="325" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>;
    const certificatesInnerCard3 = (valueCertificatesTitle3 !== '' || valueCertificatesId3 !== '' || valueCertificatesDate3 !== '') ? certificatesInnerCardPosition3 : null;

    const certificatesTitleText3 = (valueCertificatesTitle3 === '') ? null : <text x="330" y="67"><tspan x="330" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate title</tspan><tspan x="330" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesTitle3}</tspan></text> && (certificatesInnerCard1 === null && certificatesInnerCard2 === null) ? <text x="30" y="67"><tspan x="30" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate title</tspan><tspan x="30" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesTitle3}</tspan></text> : (certificatesInnerCard1 === null || certificatesInnerCard2 === null) ? <text x="180" y="67"><tspan x="180" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate title</tspan><tspan x="180" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesTitle3}</tspan></text> : <text x="330" y="67"><tspan x="330" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate title</tspan><tspan x="330" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesTitle3}</tspan></text>;
    const certificatesIdText3 = (valueCertificatesId3 === '') ? null : <text x="330" y="67"><tspan x="330" y={certificatesIdPositionTitle3} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate ID</tspan><tspan x="330" y={certificatesIdPositionText3} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesId3}</tspan></text> && (certificatesInnerCard1 === null && certificatesInnerCard2 === null) ? <text x="30" y="67"><tspan x="30" y={certificatesIdPositionTitle3} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate ID</tspan><tspan x="30" y={certificatesIdPositionText3} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesId3}</tspan></text> : (certificatesInnerCard1 === null || certificatesInnerCard2 === null) ? <text x="180" y="67"><tspan x="180" y={certificatesIdPositionTitle3} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate ID</tspan><tspan x="180" y={certificatesIdPositionText3} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesId3}</tspan></text> : <text x="330" y="67"><tspan x="330" y={certificatesIdPositionTitle3} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate ID</tspan><tspan x="330" y={certificatesIdPositionText3} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesId3}</tspan></text>;
    const certificatesDateText3 = (valueCertificatesDate3 === '') ? null : <text x="330" y="67"><tspan x="330" y={certificatesDatePositionTitle3} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate received</tspan><tspan x="330" y={certificatesDatePositionText3} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesDate3}</tspan></text> && (certificatesInnerCard1 === null && certificatesInnerCard2 === null) ? <text x="30" y="67"><tspan x="30" y={certificatesDatePositionTitle3} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate received</tspan><tspan x="30" y={certificatesDatePositionText3} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesDate3}</tspan></text> : (certificatesInnerCard1 === null || certificatesInnerCard2 === null) ? <text x="180" y="67"><tspan x="180" y={certificatesDatePositionTitle3} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate received</tspan><tspan x="180" y={certificatesDatePositionText3} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesDate3}</tspan></text> : <text x="330" y="67"><tspan x="330" y={certificatesDatePositionTitle3} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Certificate received</tspan><tspan x="330" y={certificatesDatePositionText3} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueCertificatesDate3}</tspan></text>;

    const headerTextCertificates = (certificatesInnerCard1 === null && certificatesInnerCard2 === null && certificatesInnerCard3 === null) ? null : <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My certificates</text>

    const imgHeight = (certificatesInnerCard1 === null && certificatesInnerCard2 === null && certificatesInnerCard3 === null) ? 26 : 194;

    const [checked, setChecked] = useState(false);
    const certificatesTextMore = (checked === true) ? <text x="420" y="44" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="700" fontSize="12px">+ more</text> : null;

    const svgImageCertificates = (                                         //Set the positions of the Certificates
        <svg width="495" height={imgHeight} viewBox={`0 0 495 ${imgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            {headerTextCertificates}
            {certificatesTextMore}
            <g>
                {certificatesInnerCard1}
                {certificatesTitleText1}
                {certificatesIdText1}
                {certificatesDateText1}
            </g>
            <g>
                {certificatesInnerCard2}
                {certificatesTitleText2}
                {certificatesIdText2}
                {certificatesDateText2}
            </g>
            <g>
                {certificatesInnerCard3}
                {certificatesTitleText3}
                {certificatesIdText3}
                {certificatesDateText3}
            </g>
         </svg>
    );

    const [form, setForm] = useState(0);                                 
    const toggleForm = () => (form === 0) ? setForm(1) : (form === 1) ? setForm(2) : (form === 2) ? setForm(0) : null;

    const certificatesForm1 = (                           //Takes the information of certificate in the Form 
        <form>
            <p className="currentform-text">current form: 1</p>
            <div>
                <label htmlFor="certificatetitle1">Certificate title</label><br/>
                <input onChange={valueChangeCertificatesTitle1} value={valueCertificatesTitle1} type="text" id="certificatetitle1" name="certificatetitle1" minLength="0" maxLength="40"/>
            </div>
            <div>
                <label htmlFor="certificateid1">Certificate ID</label><br/>
                <input onChange={valueChangeCertificatesId1} value={valueCertificatesId1} type="text" id="certificateid1" name="certificateid1" minLength="0" maxLength="40"/>
            </div>
            <div>
                <label htmlFor="certificatereceiveddate1">Certificate received date <span>(MM/YYYY)</span></label><br/>
                <input onChange={valueChangeCertificatesDate1} value={valueCertificatesDate1} type="text" id="certificatereceiveddate1" name="certificatereceiveddate1" minLength="0" maxLength="7"/>
            </div>
        </form>
    );

    const certificatesForm2 = (                                          //Takes the information of second Certificate
        <form>
            <p className="currentform-text">current form: 2</p>
            <div>
                <label htmlFor="certificatetitle2">Certificate title</label><br/>
                <input onChange={valueChangeCertificatesTitle2} value={valueCertificatesTitle2} type="text" id="certificatetitle2" name="certificatetitle2" minLength="0" maxLength="40"/>
            </div>
            <div>
                <label htmlFor="certificateid2">Certificate ID</label><br/>
                <input onChange={valueChangeCertificatesId2} value={valueCertificatesId2} type="text" id="certificateid2" name="certificateid2" minLength="0" maxLength="40"/>
            </div>
            <div>
                <label htmlFor="certificatereceiveddate2">Certificate received date <span>(MM/YYYY)</span></label><br/>
                <input onChange={valueChangeCertificatesDate2} value={valueCertificatesDate2} type="text" id="certificatereceiveddate2" name="certificatereceiveddate2" minLength="0" maxLength="7"/>
            </div>
        </form>
    );

    const certificatesForm3 = (                                        //Takes the information of Third Certificates
        <form>
            <p className="currentform-text">current form: 3</p>
            <div>
                <label htmlFor="certificatetitle3">Certificate title</label><br/>
                <input onChange={valueChangeCertificatesTitle3} value={valueCertificatesTitle3} type="text" id="certificatetitle3" name="certificatetitle3" minLength="0" maxLength="40"/>
            </div>
            <div>
                <label htmlFor="certificateid3">Certificate ID</label><br/>
                <input onChange={valueChangeCertificatesId3} value={valueCertificatesId3} type="text" id="certificateid3" name="certificateid3" minLength="0" maxLength="40"/>
            </div>
            <div>
                <label htmlFor="certificatereceiveddate3">Certificate received date <span>(MM/YYYY)</span></label><br/>
                <input onChange={valueChangeCertificatesDate3} value={valueCertificatesDate3} type="text" id="certificatereceiveddate3" name="certificatereceiveddate3" minLength="0" maxLength="7"/>
            </div>
        </form>
    );

    return (                                             //This will stop the Execution of the funcion and execute the lines define under this return function// 
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <div id="form-wrapper">
                            {(form === 0) ? certificatesForm1 : (form === 1) ? certificatesForm2 : (form === 2) ? certificatesForm3 : null}
                            <button id="toggle-button" onClick={toggleForm}>Toggle form</button>
                            <input id="more-button" type="checkbox" onChange={() => setChecked(!checked)}></input>
                            <p>each form corresponds to each inner card.</p>
                            <p>check the checkbox to let people know there's more information.</p>
                        </div>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> if necessary, type the name of the organization in the title.<br/><span>*</span> for information about data, see <Link to="/privacy-policy">Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    {svgImageCertificates}
                    <p id="preview-text">preview <span>- you can edit the layout in the <Link to="/s/result">Result</Link> section.</span></p>
                </div>
            </div>
        </>
    );
}

export default Certificates;      //Exporting this function for further use