import Text from './Text';

const meta = {
  title: 'Foundations/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['display', 'h1', 'h2', 'h3', 'title', 'body', 'caption', 'label'] },
    color: { control: 'color' },
    align: { control: { type: 'select' }, options: ['left', 'center', 'right'] },
    children: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Typography primitives mapped to Ocean Professional tokens.' } },
  },
};
export default meta;

export const Heading = { args: { variant: 'h1', children: 'Active Projects' } };
export const Body = { args: { variant: 'body', children: 'It is a long established fact...' } };
export const Label = { args: { variant: 'label', children: 'Completed' } };
