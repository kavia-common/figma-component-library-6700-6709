import DataTable, { ProgressBar, StatusPill } from './DataTable';

const meta = {
  title: 'Table/ActiveProjects',
  component: DataTable,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

const rows = [
  { id: '1', project: 'Bender project', lead: 'Johnson', progress: 53, status: 'Inprogress', due: '06 Jan 2024' },
  { id: '2', project: 'Batman', lead: 'William', progress: 24, status: 'Pending', due: '06 Jan 2024' },
  { id: '3', project: 'Candy', lead: 'Paul', progress: 86, status: 'Completed', due: '30 Jan 2024' },
  { id: '4', project: 'Throwing', lead: 'Ellisebeth', progress: 51, status: 'Inprogress', due: '11 Jan 2024' },
];

const columns = [
  { key: 'project', header: 'Project Name' },
  { key: 'lead', header: 'Project Lead' },
  { key: 'progress', header: 'Progress', render: (r) => <ProgressBar value={r.progress} width={163} /> },
  { key: 'status', header: 'Status', render: (r) => <StatusPill label={r.status} /> },
  { key: 'due', header: 'Due Date' },
];

export const Default = {
  args: {
    columns,
    rows,
    rowKey: (r) => r.id,
    headerHeight: 114,
    rowHeights: [114, 114, 114, 131],
  },
};
