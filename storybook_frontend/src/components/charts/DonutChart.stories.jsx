import DonutChart from './DonutChart';

const meta = {
  title: 'Charts/Donut',
  component: DonutChart,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

export const KPI = {
  args: {
    size: 167,
    thickness: 14,
    segments: [
      { value: 75, color: 'var(--accent-teal-500)' },
      { value: 25, color: 'var(--ocean-surface-muted)' },
    ],
    centerLabel: '75%',
  },
};
