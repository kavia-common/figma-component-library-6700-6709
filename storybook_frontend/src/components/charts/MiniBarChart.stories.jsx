import MiniBarChart from './MiniBarChart';

const meta = {
  title: 'Charts/MiniBar',
  component: MiniBarChart,
  tags: ['autodocs'],
  argTypes: {
    barWidth: { control: { type: 'number', min: 8, max: 48 } },
    gap: { control: { type: 'number', min: 0, max: 32 } },
    height: { control: { type: 'number', min: 40, max: 240 } },
  },
  parameters: { layout: 'centered' },
};
export default meta;

export const Default = { args: { data: [60, 80, 100, 30, 70] } };
