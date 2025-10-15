/**
 * Typography component mapping variants to Ocean tokens.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';

/**
 * PUBLIC_INTERFACE
 * Text renders semantic HTML tags with consistent typography styles.
 * Variants: display, h1, h2, h3, title, body, caption, label
 */
export function Text({ as, variant = 'body', children, color = 'var(--text-primary)', weight, align, style, ...rest }) {
  const tag = as || ({
    display: 'div',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    title: 'h4',
    body: 'p',
    caption: 'span',
    label: 'label',
  }[variant] || 'p');

  const styles = {
    display: { fontSize: 'var(--fs-display-xl)', lineHeight: 'var(--lh-display-xl)', fontWeight: 'var(--font-weight-bold)' },
    h1: { fontSize: 'var(--fs-h1)', lineHeight: 'var(--lh-h1)', fontWeight: 'var(--font-weight-bold)' },
    h2: { fontSize: 'var(--fs-h2)', lineHeight: 'var(--lh-h2)', fontWeight: 'var(--font-weight-semibold)' },
    h3: { fontSize: 'var(--fs-h3)', lineHeight: 'var(--lh-h3)', fontWeight: 'var(--font-weight-semibold)' },
    title: { fontSize: 'var(--fs-title)', lineHeight: 'var(--lh-title)', fontWeight: 'var(--font-weight-semibold)' },
    body: { fontSize: 'var(--fs-body-l)', lineHeight: 'var(--lh-body-l)', fontWeight: 'var(--font-weight-regular)' },
    caption: { fontSize: 'var(--fs-caption)', lineHeight: 'var(--lh-caption)', fontWeight: 'var(--font-weight-regular)' },
    label: { fontSize: 'var(--fs-body-m)', lineHeight: 'var(--lh-body-m)', fontWeight: 'var(--font-weight-medium)', letterSpacing: '0.8px', textTransform: 'uppercase' },
  }[variant] || {};

  const merged = {
    margin: 0,
    color,
    textAlign: align,
    ...styles,
    ...(weight ? { fontWeight: weight } : {}),
    ...style,
  };

  const Tag = tag;
  return <Tag style={merged} {...rest}>{children}</Tag>;
}

Text.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.oneOf(['display', 'h1', 'h2', 'h3', 'title', 'body', 'caption', 'label']),
  children: PropTypes.node,
  color: PropTypes.string,
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  style: PropTypes.object,
};

export default Text;
