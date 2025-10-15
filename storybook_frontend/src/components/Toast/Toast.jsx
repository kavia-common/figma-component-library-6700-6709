/**
 * Notification/Toast component with types and actions.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * Toast supports: success, info, warning, error
 */
export function Toast({ type = 'info', title, message, actions }) {
  const cls = `ocean-toast ocean-toast--${type}`;
  return (
    <div className={cls}>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontWeight: 700, marginBottom: 4 }}>{title}</div>}
        <div style={{ color: 'var(--text-secondary)' }}>{message}</div>
      </div>
      {actions && <div>{actions}</div>}
    </div>
  );
}

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  actions: PropTypes.node,
};

export default Toast;
