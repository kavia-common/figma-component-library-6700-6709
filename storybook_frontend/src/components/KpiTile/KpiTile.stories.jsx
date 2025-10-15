import KpiTile from './KpiTile';
import Icon from '../Icon/Icon';
import AvatarStack from '../Avatar/AvatarStack';
import samplePng from '../../assets/figma_image_0_69.png';
import MiniBarChart from '../charts/MiniBarChart';

const meta = {
  title: 'Dashboard/KPI Tile',
  component: KpiTile,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

export const Revenue = {
  render: () => (
    <div style={{ width: 420 }}>
      <KpiTile
        title="Revenue"
        value="$920.035"
        icon={<Icon name="dollar" size={24} />}
        chart={<MiniBarChart data={[60, 80, 100, 30, 70]} colors={['var(--accent-purple-600)', 'var(--accent-yellow-500)']} />}
        avatars={<AvatarStack avatars={[{ src: samplePng }, { initials: 'AB' }, { initials: 'CD' }, { initials: 'EF' }]} size={50} />}
        accent="purple"
      />
    </div>
  ),
};
