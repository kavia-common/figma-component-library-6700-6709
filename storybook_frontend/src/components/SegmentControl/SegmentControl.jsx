/**
 * Segmented control used for chart range selection (Week/Month/Year/All).
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';

/**
 * PUBLIC_INTERFACE
 * SegmentControl renders options as selectable chips.
 */
export function SegmentControl({ options, value, onChange, size = 'md' }) {
  const pad = size === 'sm' ? '4px 8px' : '6px 12px';
  return (
    <div role="tablist" aria-label="Segmented control" className="ocean-tabs">
      {options.map((opt) => {
        const selected = opt.value === value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={selected}
            className="ocean-tab focusable"
            style={{ padding: pad }}
            onClick={() => onChange && onChange(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

SegmentControl.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.node, value: PropTypes.string })).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
};

export default SegmentControl;
