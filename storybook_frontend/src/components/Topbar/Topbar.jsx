/**
 * Top application bar with left/center/right slots.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * Topbar hosting actions and inputs.
 */
export function Topbar({ left, center, right }) {
  return (
    <header className="ocean-topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 400 }}>{left}</div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>{center}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 400, justifyContent: 'flex-end' }}>{right}</div>
    </header>
  );
}

Topbar.propTypes = {
  left: PropTypes.node,
  center: PropTypes.node,
  right: PropTypes.node,
};

export default Topbar;
