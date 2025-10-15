/**
 * Card/Panel container with accent and surface variants.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * Card supports: surface (muted|card|elevated), accent (purple|yellow|green|blue|none)
 */
export function Card({ title, subtitle, headerRight, footer, padding = 24, radius = 16, surface = 'card', accent = 'none', children, style, ...rest }) {
  const base = ['ocean-card'];
  if (surface === 'muted') base.push('ocean-card--muted');
  if (surface === 'elevated') base.push('ocean-card--elevated');
  if (['purple', 'yellow', 'green', 'blue'].includes(accent)) base.push(`ocean-card--accent-${accent}`);

  return (
    <div className={base.join(' ')} style={{ padding, borderRadius: radius, ...style }} {...rest}>
      {(title || headerRight || subtitle) && (
        <div style={{ display: 'flex', alignItems: subtitle ? 'flex-start' : 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
          <div>
            {title && <div style={{ fontSize: 'var(--fs-h3)', lineHeight: 'var(--lh-h3)', fontWeight: 'var(--font-weight-semibold)' }}>{title}</div>}
            {subtitle && <div style={{ fontSize: 'var(--fs-body-m)', lineHeight: 'var(--lh-body-m)', color: 'var(--text-muted)' }}>{subtitle}</div>}
          </div>
          {headerRight && <div>{headerRight}</div>}
        </div>
      )}
      <div>{children}</div>
      {footer && <div style={{ marginTop: 16 }}>{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  headerRight: PropTypes.node,
  footer: PropTypes.node,
  padding: PropTypes.number,
  radius: PropTypes.number,
  surface: PropTypes.oneOf(['muted', 'card', 'elevated']),
  accent: PropTypes.oneOf(['purple', 'yellow', 'green', 'blue', 'none']),
  children: PropTypes.node,
  style: PropTypes.object,
};

export default Card;
