/**
 * AvatarStack for overlapping participant images and overflow count.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

/**
 * PUBLIC_INTERFACE
 * AvatarStack overlaps avatars and shows +N for overflow.
 */
export function AvatarStack({ avatars = [], size = 50, overlap = -12, overflowCount }) {
  const toShow = avatars.slice(0, 3);
  const extra = overflowCount ?? (avatars.length > 3 ? `+${avatars.length - 3}` : undefined);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {toShow.map((a, idx) => (
        <div key={idx} style={{ marginLeft: idx === 0 ? 0 : overlap }}>
          <Avatar {...a} size={size} />
        </div>
      ))}
      {extra && (
        <div style={{ marginLeft: overlap, background: 'var(--ocean-surface-muted)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)', borderRadius: 999, width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
          {extra}
        </div>
      )}
    </div>
  );
}

AvatarStack.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string, initials: PropTypes.string })),
  size: PropTypes.number,
  overlap: PropTypes.number,
  overflowCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AvatarStack;
