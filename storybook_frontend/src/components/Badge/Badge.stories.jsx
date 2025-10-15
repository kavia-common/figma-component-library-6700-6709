import Badge from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['neutral', 'success', 'warning', 'error', 'info'] },
    size: { control: { type: 'select' }, options: ['sm', 'md'] },
    children: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Tag-like badge with Ocean dark-friendly fills and borders.' } },
  },
};
export default meta;

export const Neutral = { args: { children: 'Neutral', variant: 'neutral' } };
export const Success = { args: { children: 'Completed', variant: 'success' } };
export const Warning = { args: { children: 'Pending', variant: 'warning' } };
