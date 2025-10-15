import Sidebar from './Sidebar';
import Icon from '../Icon/Icon';

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: <Icon name="home" size={20} /> },
  { key: 'light', label: 'Dashboard Light' },
  { key: 'dark', label: 'Dashboard Dark', badge: 2 },
  { key: 'employees', label: 'Employee Board' },
  { key: 'products', label: 'Products' },
  { key: 'sales', label: 'Sales' },
  { key: 'tasks', label: 'Tasks' },
  { key: 'projects', label: 'Projects' },
];

const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

export const Default = { args: { brand: { title: 'Your Company' }, items, activeKey: 'dark' } };
