/**
 * AppShell grid layout with sidebar, topbar, and content regions.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';

/**
 * PUBLIC_INTERFACE
 * AppShell uses CSS grid to compose app layout.
 */
export function AppShell({ sidebar, topbar, children, sidebarWidth = 277, topbarHeight = 110, isSidebarCollapsed = false }) {
  const sw = isSidebarCollapsed ? 72 : sidebarWidth;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `${sw}px 1fr`,
        gridTemplateRows: `${topbarHeight}px 1fr`,
        minHeight: '100vh',
        background: 'var(--ocean-bg-900)',
        color: 'var(--text-primary)',
      }}
    >
      <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}>{sidebar}</div>
      <div style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}>{topbar}</div>
      <main style={{ gridColumn: '2 / 3', gridRow: '2 / 3', padding: 24 }}>{children}</main>
    </div>
  );
}

AppShell.propTypes = {
  sidebar: PropTypes.node,
  topbar: PropTypes.node,
  children: PropTypes.node,
  sidebarWidth: PropTypes.number,
  topbarHeight: PropTypes.number,
  isSidebarCollapsed: PropTypes.bool,
};

export default AppShell;
