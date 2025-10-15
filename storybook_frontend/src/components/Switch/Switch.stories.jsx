import React, { useState } from 'react';
import Switch from './Switch';

const meta = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

const SwitchWithState = (args) => {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={setOn} ariaLabel="Dark mode" {...args} />;
};

export const Default = {
  render: (args) => <SwitchWithState {...args} />,
};
