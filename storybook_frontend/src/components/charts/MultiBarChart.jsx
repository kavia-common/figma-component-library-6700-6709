/**
 * Simplified multi-series bar chart with categories and grid lines.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';

/**
 * PUBLIC_INTERFACE
 * MultiBarChart displays grouped bars per category.
 */
export function MultiBarChart({ series = [], categories = [], height = 260, showGrid = true }) {
  const max = Math.max(1, ...series.flatMap((s) => s.data || []));
  const groupWidth = 40 * Math.max(1, series.length);
  return (
    <div style={{ padding: 16, background: 'var(--ocean-surface-muted)', border: '1px solid var(--border-subtle)', borderRadius: 12 }}>
      <div style={{ position: 'relative', height }}>
        {showGrid && [0.25, 0.5, 0.75, 1].map((p, i) => (
          <div key={i} style={{ position: 'absolute', left: 0, right: 0, bottom: `${p * 100}%`, borderTop: '1px solid var(--chart-grid)' }} />
        ))}
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end', height: '100%' }}>
          {categories.map((cat, idx) => (
            <div key={cat} style={{ width: groupWidth }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: '100%' }}>
                {series.map((s, sIdx) => {
                  const val = s.data?.[idx] ?? 0;
                  const h = Math.max(4, Math.round((val / max) * height));
                  return <div key={sIdx} style={{ width: 24, height: h, background: s.color || 'var(--chart-1)', borderRadius: 6 }} />;
                })}
              </div>
              <div style={{ textAlign: 'center', marginTop: 8, fontSize: '12px', color: 'var(--text-muted)' }}>{cat}</div>
            </div>
          ))}
        </div>
      </div>
      {series.length > 0 && (
        <div style={{ display: 'flex', gap: 16, marginTop: 12, color: 'var(--text-muted)', fontSize: 12 }}>
          {series.map((s, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 12, height: 12, background: s.color || 'var(--chart-1)', borderRadius: 2 }}></span>
              {s.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

MultiBarChart.propTypes = {
  series: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, data: PropTypes.arrayOf(PropTypes.number), color: PropTypes.string })),
  categories: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
  showGrid: PropTypes.bool,
};

export default MultiBarChart;
