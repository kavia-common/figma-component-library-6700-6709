import Card from './Card';
import Icon from '../Icon/Icon';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    surface: { control: { type: 'select' }, options: ['muted', 'card', 'elevated'] },
    accent: { control: { type: 'select' }, options: ['none', 'purple', 'yellow', 'green', 'blue'] },
  },
};
export default meta;

export const Default = {
  args: {
    title: 'Project Overview',
    subtitle: 'Number of projects • Revenue • Working Hours',
    children: <div style={{ height: 120 }}>Panel content</div>,
  },
};

export const AccentPurple = {
  args: {
    title: 'Revenue',
    accent: 'purple',
    headerRight: <Icon name="dollar" size={24} />,
    children: <div style={{ height: 80 }}>KPI content</div>,
  },
};

export const Elevated = {
  args: {
    title: 'Elevated Panel',
    surface: 'elevated',
    children: <div style={{ height: 100 }}>Elevated surface uses --ocean-bg-850.</div>,
  },
};
