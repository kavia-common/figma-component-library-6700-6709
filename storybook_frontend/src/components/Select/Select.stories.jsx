import React, { useState } from 'react';
import Select from './Select';

const meta = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Native select styled to match Ocean Professional inputs.' } },
  },
};
export default meta;

export const Default = {
  render: (args) => {
    const [val, setVal] = useState('jan');
    const options = [
      { value: 'jan', label: 'January' },
      { value: 'feb', label: 'February' },
      { value: 'mar', label: 'March' },
    ];
    return <div style={{ width: 240 }}><Select {...args} value={val} onChange={setVal} options={options} /></div>;
  },
  args: {},
};
