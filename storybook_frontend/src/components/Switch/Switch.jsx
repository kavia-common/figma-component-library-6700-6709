/**
 * Toggle switch component with keyboard accessibility.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * Switch toggles a boolean value with accessible focus ring.
 */
export function Switch({ checked, onChange, disabled = false, ariaLabel = 'toggle', ...rest }) {
  return (
    <label className="ocean-switch" aria-label={ariaLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        disabled={disabled}
        {...rest}
      />
      <span className="track"></span>
      <span className="thumb"></span>
    </label>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default Switch;
