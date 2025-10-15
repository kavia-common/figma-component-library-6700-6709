/**
 * Minimal bar chart rendering bars from data array.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';

/**
 * PUBLIC_INTERFACE
 * MiniBarChart displays simple vertical bars with alternating colors.
 */
export function MiniBarChart({ data = [], barWidth = 33, gap = 16, colors = ['var(--chart-1)', 'var(--chart-2)'], height = 120 }) {
  const max = Math.max(1, ...data);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap, height }}>
      {data.map((d, i) => {
        const h = Math.max(4, Math.round((d / max) * height));
        const color = colors[i % colors.length];
        return <div key={i} style={{ width: barWidth, height: h, background: color, borderRadius: 6 }} />;
      })}
    </div>
  );
}

MiniBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  barWidth: PropTypes.number,
  gap: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
};

export default MiniBarChart;
