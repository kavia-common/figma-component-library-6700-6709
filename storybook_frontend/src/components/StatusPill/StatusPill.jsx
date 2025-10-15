/**
 * Status pill for table rows (Inprogress, Pending, Completed).
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * StatusPill maps labels to appropriate dark-friendly backgrounds.
 */
export function StatusPill({ label, size = 'md' }) {
  const key = (label || '').toLowerCase();
  const cls = key.includes('pending')
    ? 'ocean-status--pending'
    : key.includes('complete')
    ? 'ocean-status--completed'
    : 'ocean-status--inprogress';
  const padding = size === 'sm' ? '6px 10px' : '8px 12px';
  return <span className={`ocean-status-pill ${cls}`} style={{ padding }}>{label}</span>;
}

StatusPill.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
};

export default StatusPill;
