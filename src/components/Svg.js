import React, { useState, useEffect, useContext } from 'react';
import { GlobalStateContext } from '../components/GlobalState';
import { NavigationItems } from './Navigation';

const chunk = (array, size) =>
  array.reduce((a, c, i) => {
    if (i % size == 0) a.push([c]);
    else a[Math.floor(i / size)].push(c);
    return a;
  }, []);

const sectionOrder = (section) =>
  NavigationItems.findIndex((item) => item.toLocaleLowerCase() === section);

const titleFormat = (title) =>
  title[0].toLocaleUpperCase() +
  title.substr(1).replace(/([a-z]+)([A-Z])/g, (_, a, b) => `${a} ${b}`);

const Rows = ({ title, x, y, entries }) => {
  return (
    <>
      <text x={x} y={y} fontSize={20} fontWeight={600} fill="#2f80ed">
        {titleFormat(title)}
      </text>
      {typeof entries === 'object' ? (
        Object.entries(entries).map(([key, value], i) => (
          <text x={x} y={y + i * 30 + 40} key={key}>
            <tspan fontWeight={600}>{titleFormat(key)}</tspan>{' '}
            <tspan dx={10}>{value}</tspan>
          </text>
        ))
      ) : (
        <text x={x} y={y + 40}>
          {entries}
        </text>
      )}
    </>
  );
};

export default () => {
  const buffer = 70;
  const margin = 30;
  const paddingX = 30;
  const paddingY = 50;
  const sectionHeight = 200;
  const sectionWidth = 450;
  const [scaleRatio, setScaleRatio] = useState(1);
  const [globalState] = useContext(GlobalStateContext);
  const stateArray = Object.entries(globalState)
    .filter(
      ([_, item]) =>
        (typeof item === 'object' ? Object.keys(item) : item.trim()).length,
    )
    .map(([key, value]) => ({
      section: key,
      value,
    }));
  stateArray.sort((a, b) => (sectionOrder(a) > sectionOrder(b) ? -1 : 1));
  const sections = chunk(stateArray, 2);
  const totalHeight = (sectionHeight + margin) * sections.length + margin;
  const totalWidth = sectionWidth * 2 + margin * 3;
  const fullWidth = sectionWidth * 2 + margin;
  useEffect(() => {
    setScaleRatio(
      ((document.querySelector('main') || {}).offsetWidth - buffer) /
        totalWidth,
    );
  }, []);
  return (
    <svg
      width={totalWidth * scaleRatio || 0}
      height={totalHeight * scaleRatio || 0}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {sections.map((group, i) => (
        <g
          key={i}
          transform={`translate(${margin}, ${i * (sectionHeight + margin)})`}
        >
          {group.map((row, j) => (
            <g key={j}>
              <rect
                key={row.section}
                x={j * (sectionWidth + margin)}
                y={margin}
                rx={4.5}
                ry={4.5}
                width={group.length > 1 ? sectionWidth : fullWidth}
                height={sectionHeight}
                style={{
                  stroke: '#e4e2e2',
                  fill: '#fffefe',
                  strokeWidth: 2,
                }}
              />
              <Rows
                x={j * (sectionWidth + margin) + paddingX}
                y={margin + paddingY}
                title={row.section}
                entries={row.value}
              />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
};
