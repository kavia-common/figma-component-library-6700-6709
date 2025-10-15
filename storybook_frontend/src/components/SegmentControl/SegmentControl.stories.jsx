import React, { useState } from 'react';
import SegmentControl from './SegmentControl';

const meta = {
  title: 'Inputs/SegmentControl',
  component: SegmentControl,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

const SegmentControlWithState = (args) => {
  const [v, setV] = useState('week');
  const options = [
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
    { label: 'All', value: 'all' },
  ];
  return <SegmentControl options={options} value={v} onChange={setV} {...args} />;
};

export const Default = {
  render: (args) => <SegmentControlWithState {...args} />,
};
