import React from 'react';
import Svg from '../components/Svg';

const svgToPngUrl = (svgBlob) =>
  new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      let canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);
      resolve(canvas.toDataURL());
    };
    image.onerror = console.error;
    image.src = window.URL.createObjectURL(svgBlob);
  });

const downloadImage = async (event) => {
  const { type } = event.target.dataset;
  const a = document.createElement('a');
  document.body.appendChild(a);
  const svgDoc = document.getElementsByTagName('svg')[0];
  const blob = new Blob([svgDoc.outerHTML], {
    type: 'image/svg+xml;charset=utf-8',
  });
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
};

export default () => (
  <>
    <Svg />
    <p>
      <button data-type="svg" onClick={downloadImage}>
        Download SVG
      </button>
      &nbsp;
      <button data-type="png" onClick={downloadImage}>
        Download PNG
      </button>
    </p>
  </>
);
