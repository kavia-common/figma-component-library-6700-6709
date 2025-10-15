/**
 * Icon wrapper that maps design asset names to SVG imports for easy reuse.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';

// Import SVGs as React Components when supported by CRA preset
// Fallback to <img> if ReactComponent import is not available in this environment
import { ReactComponent as HomeIcon } from '../../assets/figma_image_0_304.svg';
import { ReactComponent as ExportIcon } from '../../assets/figma_image_0_247.svg';
import { ReactComponent as DollarIcon } from '../../assets/figma_image_0_100.svg';
import { ReactComponent as CorrectIcon } from '../../assets/figma_image_0_139.svg';
import { ReactComponent as CheckIcon } from '../../assets/figma_image_0_141.svg';

const registry = {
  home: HomeIcon,
  export: ExportIcon,
  dollar: DollarIcon,
  correct: CorrectIcon,
  check: CheckIcon,
};

// PUBLIC_INTERFACE
export function Icon({ name, size = 24, color = 'currentColor', title, ...rest }) {
  const Cmp = registry[name];
  if (Cmp) {
    return <Cmp width={size} height={size} fill={color} aria-label={title || name} {...rest} />;
  }
  // Fallback: render nothing if name is unknown
  return <span aria-hidden="true" style={{ display: 'inline-block', width: size, height: size }} {...rest} />;
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(registry)).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  title: PropTypes.string,
};

export default Icon;
