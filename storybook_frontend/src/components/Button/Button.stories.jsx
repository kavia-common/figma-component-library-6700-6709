/**
 * Stories for Button component with controls for variant/size/fullWidth/disabled.
 */
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile button component styled with the Ocean Professional theme. Supports primary, secondary, and ghost variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    children: { control: 'text' },
  },
};

function Template(args) {
  return <Button {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  size: 'md',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost Button',
  variant: 'ghost',
  size: 'md',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  variant: 'primary',
  size: 'md',
  disabled: true,
};
