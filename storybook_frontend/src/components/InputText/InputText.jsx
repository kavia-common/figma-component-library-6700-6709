/**
 * Text input styled for Ocean Professional dark.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * InputText renders a text input with optional leading/trailing elements.
 */
export function InputText({
  value,
  onChange,
  placeholder = 'Search here..',
  disabled = false,
  leading,
  trailing,
  size = 'md',
  ...rest
}) {
  const height = size === 'sm' ? 36 : size === 'lg' ? 52 : 46;
  const paddingLeft = leading ? 40 : 12;
  const paddingRight = trailing ? 40 : 12;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {leading && (
        <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
          {leading}
        </span>
      )}
      <input
        type="text"
        className="ocean-input"
        style={{ minHeight: height, paddingLeft, paddingRight }}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {trailing && (
        <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }}>
          {trailing}
        </span>
      )}
    </div>
  );
}

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  leading: PropTypes.node,
  trailing: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default InputText;
