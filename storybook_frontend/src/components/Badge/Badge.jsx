/**
 * Badge/Tag component for status and metadata chips.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * Badge supports variants: neutral, success, warning, error, info
 */
export function Badge({ children, variant = 'neutral', size = 'md', ...rest }) {
  const className = `ocean-badge ocean-badge--${variant}`;
  const style = size === 'sm'
    ? { padding: '4px 8px', fontSize: '12px', lineHeight: '18px' }
    : { padding: '8px 12px', fontSize: '14px', lineHeight: '22px' };
  return <span className={className} style={style} {...rest}>{children}</span>;
}

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['neutral', 'success', 'warning', 'error', 'info']),
  size: PropTypes.oneOf(['sm', 'md']),
};

export default Badge;
