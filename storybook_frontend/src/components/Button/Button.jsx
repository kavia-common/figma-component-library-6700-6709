/**
 * A simple, reusable Button component following Ocean Professional theme.
 * Variants: primary, secondary, ghost. Sizes: sm, md, lg.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/storybook-theme.css';

const classesFor = (variant, size, fullWidth) => {
  const base = ['sb-btn'];
  const v = {
    primary: 'sb-btn--primary',
    secondary: 'sb-btn--secondary',
    ghost: 'sb-btn--ghost',
  }[variant] || 'sb-btn--primary';

  const sz = {
    sm: { padding: '8px 12px', fontSize: 14, borderRadius: 8 },
    md: { padding: '10px 16px', fontSize: 15, borderRadius: 10 },
    lg: { padding: '12px 18px', fontSize: 16, borderRadius: 12 },
  }[size] || { padding: '10px 16px', fontSize: 15, borderRadius: 10 };

  const style = {
    padding: sz.padding,
    fontSize: sz.fontSize,
    borderRadius: sz.borderRadius,
    width: fullWidth ? '100%' : undefined,
  };

  return { className: [...base, v].join(' '), style };
};

// PUBLIC_INTERFACE
export function Button({ children, variant = 'primary', size = 'md', fullWidth = false, disabled = false, onClick, ...rest }) {
  const { className, style } = classesFor(variant, size, fullWidth);
  return (
    <button
      type="button"
      className={className}
      style={style}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
