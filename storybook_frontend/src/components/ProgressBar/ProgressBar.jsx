/**
 * Simple progress bar with configurable value and colors.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * ProgressBar uses a fixed height similar to design (17px).
 */
export function ProgressBar({ value = 0, color = 'var(--accent-blue-500)', width = 163, height = 17, radius = 6, bg }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className="ocean-progress" style={{ width, height, borderRadius: radius, background: bg || 'var(--chip-bg)' }}>
      <div className="ocean-progress__fill" style={{ width: `${v}%`, background: color }} />
    </div>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  bg: PropTypes.string,
};

export default ProgressBar;
