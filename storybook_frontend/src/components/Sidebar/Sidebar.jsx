/**
 * Sidebar navigation with brand and nav items.
 */
// PUBLIC_INTERFACE
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ocean.css';
import Icon from '../Icon/Icon';

/**
 * PUBLIC_INTERFACE
 * NavItem for Sidebar lists.
 */
export function NavItem({ icon, label, active = false, badge, onClick }) {
  return (
    <div className={`ocean-nav-item ${active ? 'ocean-nav-item--active' : ''}`} role="link" onClick={onClick} style={{ cursor: 'pointer' }}>
      {icon}
      <span style={{ flex: 1 }}>{label}</span>
      {badge != null && <span className="ocean-badge ocean-badge--neutral" style={{ padding: '2px 8px', fontSize: 12, lineHeight: '18px' }}>{badge}</span>}
    </div>
  );
}

NavItem.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.node.isRequired,
  active: PropTypes.bool,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

/**
 * PUBLIC_INTERFACE
 * Sidebar container.
 */
export function Sidebar({ brand = { title: 'Your Company' }, items = [], activeKey }) {
  return (
    <aside className="ocean-sidebar" style={{ width: 277 }}>
      <div className="brand">{brand.title}</div>
      <nav>
        {items.map((it) => (
          <NavItem
            key={it.key}
            icon={it.icon}
            label={it.label}
            active={activeKey === it.key}
            badge={it.badge}
            onClick={it.onClick}
          />
        ))}
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  brand: PropTypes.shape({ logo: PropTypes.node, title: PropTypes.string }),
  items: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string.isRequired, icon: PropTypes.node, label: PropTypes.node, badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })),
  activeKey: PropTypes.string,
};

export default Sidebar;
