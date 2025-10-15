/**
 * KPI Tile showing title, value, optional icon and chart.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

/**
 * PUBLIC_INTERFACE
 * KpiTile composes Card with KPI styling.
 */
export function KpiTile({ title, value, icon, chart, accent = 'purple', avatars }) {
  return (
    <Card title={title} surface="card" accent={accent}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {icon}
          <div style={{ fontSize: 'var(--fs-h1)', lineHeight: 'var(--lh-h1)', fontWeight: 'var(--font-weight-bold)' }}>{value}</div>
        </div>
        {avatars}
      </div>
      {chart && <div style={{ marginTop: 12 }}>{chart}</div>}
    </Card>
  );
}

KpiTile.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node,
  chart: PropTypes.node,
  accent: PropTypes.oneOf(['purple', 'yellow', 'green', 'blue']),
  avatars: PropTypes.node,
};

export default KpiTile;
