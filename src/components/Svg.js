import React, { useContext } from 'react';
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

const Rows = ({ x, y, values }) => {
  if (typeof values === 'object') {
    return Object.entries(values).map(([key, value], i) => (
      <text x={x} y={y + i * 30} key={key}>
        {key} {value}
      </text>
    ));
  } else {
    return (
      <text x={x} y={y}>
        {values}
      </text>
    );
  }
};
export default () => {
  const buffer = 70;
  const margin = 30;
  const padding = 50;
  const sectionHeight = 200;
  const sectionWidth = 450;
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
  stateArray.sort((a, b) => sectionOrder(a) > sectionOrder(b) ? -1 : 1);
  const sections = chunk(stateArray, 2);
  const totalHeight = (sectionHeight + margin) * sections.length + margin;
  const totalWidth = sectionWidth * 2 + margin * 3;
  const fullWidth = sectionWidth * 2 + margin;
  const scaleRatio =
    ((document.querySelector('main')||{}).offsetWidth - buffer) / totalWidth;
  return (
    <svg
      width={totalWidth * scaleRatio}
      height={totalHeight * scaleRatio}
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
                x={j * (sectionWidth + margin) + padding}
                y={margin + padding}
                values={row.value}
              />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
};
