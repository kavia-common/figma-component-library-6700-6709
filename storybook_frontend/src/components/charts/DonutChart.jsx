/**
 * Donut chart using SVG strokeDasharray segments.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';

/**
 * PUBLIC_INTERFACE
 * DonutChart renders proportionate segments; centerLabel can show KPIs.
 */
export function DonutChart({ size = 167, thickness = 14, segments = [], centerLabel }) {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const sum = segments.reduce((a, s) => a + (s.value || 0), 0) || 1;
  let offset = 0;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${size/2} ${size/2})`}>
          {segments.map((s, i) => {
            const frac = (s.value || 0) / sum;
            const len = circumference * frac;
            const dash = `${len} ${circumference - len}`;
            const circle = (
              <circle
                key={i}
                cx={size/2}
                cy={size/2}
                r={radius}
                fill="transparent"
                stroke={s.color || 'var(--chart-1)'}
                strokeWidth={thickness}
                strokeDasharray={dash}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            );
            offset -= len;
            return circle;
          })}
        </g>
      </svg>
      {centerLabel && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
          {centerLabel}
        </div>
      )}
    </div>
  );
}

DonutChart.propTypes = {
  size: PropTypes.number,
  thickness: PropTypes.number,
  segments: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number.isRequired, color: PropTypes.string })),
  centerLabel: PropTypes.node,
};

export default DonutChart;
