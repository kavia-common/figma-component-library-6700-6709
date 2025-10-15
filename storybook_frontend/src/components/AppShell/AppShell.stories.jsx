import AppShell from './AppShell';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import Icon from '../Icon/Icon';
import InputText from '../InputText/InputText';

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: <Icon name="home" size={20} /> },
  { key: 'dark', label: 'Dashboard Dark' },
  { key: 'projects', label: 'Projects' },
];

const meta = {
  title: 'Layout/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default = {
  render: () => (
    <AppShell
      sidebar={<Sidebar items={items} activeKey="dark" brand={{ title: 'Your Company' }} />}
      topbar={<Topbar left={<Icon name="home" size={28} />} center={<div style={{ width: 386 }}><InputText placeholder="Search here.." /></div>} right={<Icon name="export" size={28} />} />}
    >
      <div className="sb-surface">Content area</div>
    </AppShell>
  ),
};

export const Collapsed = {
  render: () => (
    <AppShell
      isSidebarCollapsed
      sidebar={<Sidebar items={items} activeKey="dark" brand={{ title: 'YC' }} />}
      topbar={<Topbar left={<Icon name="home" size={28} />} center={<div style={{ width: 386 }}><InputText placeholder="Search here.." /></div>} right={<Icon name="export" size={28} />} />}
    >
      <div className="sb-surface">Content area</div>
    </AppShell>
  ),
};
