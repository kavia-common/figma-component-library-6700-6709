/**
 * Avatar with optional image or initials.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * Avatar shows a circular image or initials fallback.
 */
export function Avatar({ src, alt = 'avatar', initials, size = 50 }) {
  const style = { width: size, height: size, fontSize: Math.max(12, Math.floor(size * 0.4)) };
  return (
    <div className="ocean-avatar" style={style} aria-label={alt}>
      {src ? <img src={src} alt={alt} width={size} height={size} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (initials || '?')}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  initials: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;
