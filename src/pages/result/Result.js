import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import "./Result.scss";

function Result() {
    let svgImages = [];
    let svgCards = [];
    const width = 1000;
    const height = 390;

    const svgImageProgrammingPassed = localStorage.getItem('svgImageProgrammingStored')
    const svgImageTechnologiesPassed = localStorage.getItem('svgImageTechnologiesStored')
    const svgImagePersonalPassed = localStorage.getItem('svgImagePersonalStored')
    /*const svgImageEducationPassed = localStorage.getItem('svgImageEducationStored')
    const svgImageJobPassed = localStorage.getItem('svgImageJobStored')
    const svgImageCertificatesPassed = localStorage.getItem('svgImageCertificatesStored')*/

    const svgImageProgrammingPassedClean = DOMPurify.sanitize(svgImageProgrammingPassed);
    const svgImageTechnologiesPassedClean = DOMPurify.sanitize(svgImageTechnologiesPassed);
    const svgImagePersonalPassedClean = DOMPurify.sanitize(svgImagePersonalPassed);
    /*const svgImageEducationPassedClean = DOMPurify.sanitize(svgImageEducationPassed);
    const svgImageJobPassedClean = DOMPurify.sanitize(svgImageJobPassed);
    const svgImageCertificatesPassedClean = DOMPurify.sanitize(svgImageCertificatesPassed);*/

    svgImages.push(parse(svgImageProgrammingPassedClean));
    svgImages.push(parse(svgImageTechnologiesPassedClean));
    svgImages.push(parse(svgImagePersonalPassedClean));
    /*svgImages.push(parse(svgImageEducationPassedClean));
    svgImages.push(parse(svgImageJobPassedClean));
    svgImages.push(parse(svgImageCertificatesPassedClean));*/
    console.log(svgImages);

    let curHeight = 0;

    for (let i = 0; i < svgImages.length; i++) {
        let x = 0;
        if (i % 2 !== 0) {
            x = 500;
        }
        svgCards.push(<SvgCard svgImage={svgImages[i]} x={x} y={curHeight} key={i} />);

        if (i % 2 !== 0) {
            curHeight += Math.max(parseInt(svgImages[i].props.height), parseInt(svgImages[i - 1].props.height));
        }
    }

    const svgToPngUrl = (svgBlob) => new Promise((resolve) => {
        const image = new Image();
        image.onload = () => {
            let canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, width, height);
            resolve(canvas.toDataURL());
        }
        image.src = URL.createObjectURL(svgBlob);
    });

    const download = async (event) => {
        const { type } = event.target.dataset;
        const a = document.createElement('a');
        document.body.appendChild(a);
        const svgDoc = document.getElementById('result-svg');
        const blob = new Blob([svgDoc.outerHTML], { type: 'image/svg+xml;charset=utf-8' });
        let url = '';
        if (type === 'png') {
            url = await svgToPngUrl(blob);
        } else {
            url = window.URL.createObjectURL(blob);
        }
        a.href = url;
        a.download = `thisisme.${type}`;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    }

    //let personalImg = <SvgCard svgImage={parse(svgImagePersonalPassedClean)} x="500" />;

    return (
        <>
            <Navigation />
            <div className="section-wrapper">
                <div id="result">
                    <svg id="result-svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        {svgCards}
                    </svg>
                    <div className="button-group">
                        <button className="download-button" data-type="svg" onClick={download}>Download SVG</button>
                        <button className="download-button" data-type="png" onClick={download}>Download PNG</button>
                    </div>
                </div>
            </div>
        </>
    );
}

function SvgCard(props) {
    return (
        <svg {...props.svgImage.props} x={props.x} y={props.y}></svg>
    );
}

export default Result;
