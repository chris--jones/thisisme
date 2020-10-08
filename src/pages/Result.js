import React from 'react';
import Navigation from '../components/Navigation';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

function Result() {
    let svgImages = [];
    let svgCards = [];
    const width = 1000;
    const height = 390;

    const svgImageProgrammingPassed = localStorage.getItem('svgImageProgrammingStored')
    const svgImageTechnologiesPassed = localStorage.getItem('svgImageTechnologiesStored')
    const svgImagePersonalPassed = localStorage.getItem('svgImagePersonalStored')

    const svgImageProgrammingPassedClean = DOMPurify.sanitize(svgImageProgrammingPassed);
    const svgImageTechnologiesPassedClean = DOMPurify.sanitize(svgImageTechnologiesPassed);
    const svgImagePersonalPassedClean = DOMPurify.sanitize(svgImagePersonalPassed);

    svgImages.push(parse(svgImageProgrammingPassedClean));
    svgImages.push(parse(svgImageTechnologiesPassedClean));
    svgImages.push(parse(svgImagePersonalPassedClean));
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

    let personalImg = <SvgCard svgImage={parse(svgImagePersonalPassedClean)} x="500" />;

    return (
        <>
            <Navigation />
            <div id="result">
                <svg id="result-svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    {svgCards}
                </svg>
                <button id="download-button" data-type="svg" onClick={download}>Download SVG</button>
                <button id="download-button" data-type="png" onClick={download}>Download PNG</button>
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