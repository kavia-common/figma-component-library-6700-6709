/**
 * Ocean-styled native select control.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * Select wraps a standard <select> with consistent styling.
 */
export function Select({ options = [], value, onChange, disabled = false, size = 'md', ...rest }) {
  const height = size === 'sm' ? 36 : size === 'lg' ? 52 : 46;
  return (
    <select
      className="ocean-select"
      style={{ minHeight: height }}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      disabled={disabled}
      {...rest}
    >
      {options.map((opt) => (
        <option key={opt.value ?? opt} value={opt.value ?? opt}>
          {opt.label ?? String(opt)}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), label: PropTypes.node }),
  ])),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Select;
