import Icon from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: { type: 'select' }, options: ['home', 'export', 'dollar', 'correct', 'check'] },
    size: { control: { type: 'number', min: 12, max: 96 } },
    color: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: { component: 'Wrapper for Figma-exported SVG icons used across components.' },
    },
  },
};
export default meta;

export const Home = { args: { name: 'home', size: 32 } };
export const Export = { args: { name: 'export', size: 32 } };
export const Dollar = { args: { name: 'dollar', size: 32 } };
