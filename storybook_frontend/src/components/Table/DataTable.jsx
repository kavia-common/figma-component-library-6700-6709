/**
 * DataTable skeleton aligned to "Active Projects" structure.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import StatusPill from '../StatusPill/StatusPill';

/**
 * PUBLIC_INTERFACE
 * DataTable renders a simple grid with header and rows.
 */
export function DataTable({ columns, rows, rowKey, headerHeight = 114, rowHeights = [] }) {
  return (
    <div className="ocean-card" style={{ padding: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)`, alignItems: 'center', height: headerHeight, background: 'var(--ocean-surface-muted)', borderBottom: '1px solid var(--border-subtle)', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '0 16px', gap: 16 }}>
        {columns.map((c) => (
          <div key={c.key} style={{ fontSize: 'var(--fs-h2)', lineHeight: 'var(--lh-h2)', fontWeight: 600, color: 'var(--text-primary)' }}>{c.header}</div>
        ))}
      </div>
      <div>
        {rows.map((row, idx) => {
          const h = rowHeights[idx] ?? 114;
          return (
            <div key={rowKey(row)} style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)`, alignItems: 'center', height: h, padding: '0 16px', borderTop: '1px solid var(--divider)' }}>
              {columns.map((c) => {
                const value = c.render ? c.render(row) : row[c.key];
                return <div key={c.key} style={{ color: 'var(--text-primary)' }}>{value}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string.isRequired, header: PropTypes.node.isRequired, render: PropTypes.func })),
  rows: PropTypes.array.isRequired,
  rowKey: PropTypes.func.isRequired,
  headerHeight: PropTypes.number,
  rowHeights: PropTypes.arrayOf(PropTypes.number),
};

// Helpers exported for convenience
export { ProgressBar, StatusPill };

export default DataTable;
