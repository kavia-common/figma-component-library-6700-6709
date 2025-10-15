import MultiBarChart from './MultiBarChart';

const meta = {
  title: 'Charts/MultiBar',
  component: MultiBarChart,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

export const ProjectOverview = {
  args: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    series: [
      { label: 'Number of projects', data: [60, 90, 40, 80, 55, 70, 50], color: 'var(--chart-1)' },
      { label: 'Revenue', data: [30, 60, 35, 40, 50, 55, 60], color: 'var(--chart-2)' },
      { label: 'Working Hours', data: [20, 40, 55, 30, 60, 65, 45], color: 'var(--chart-5)' },
    ],
    height: 240,
  },
};
