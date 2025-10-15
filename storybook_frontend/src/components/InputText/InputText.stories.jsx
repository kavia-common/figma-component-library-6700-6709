import React, { useState } from 'react';
import InputText from './InputText';
import Icon from '../Icon/Icon';

const meta = {
  title: 'Inputs/TextField',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Ocean-styled text input with focus ring and placeholder tokens.' } },
  },
};
export default meta;

// Use Uppercase React components to host hooks, to satisfy react-hooks rules.
const InputTextControlled = (args) => {
  const [val, setVal] = useState('');
  return (
    <div style={{ width: 360 }}>
      <InputText {...args} value={val} onChange={setVal} />
    </div>
  );
};

const InputTextWithIcons = (args) => {
  const [val, setVal] = useState('');
  return (
    <div style={{ width: 360 }}>
      <InputText
        {...args}
        value={val}
        onChange={setVal}
        leading={<Icon name="home" size={20} />}
        trailing={<Icon name="export" size={20} />}
      />
    </div>
  );
};

export const Default = {
  render: (args) => <InputTextControlled {...args} />,
  args: { placeholder: 'Search here..', size: 'md' },
};

export const WithIcons = {
  render: (args) => <InputTextWithIcons {...args} />,
  args: { placeholder: 'Search...' },
};
