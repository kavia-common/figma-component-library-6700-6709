import Topbar from './Topbar';
import InputText from '../InputText/InputText';
import Icon from '../Icon/Icon';

const meta = {
  title: 'Navigation/Topbar',
  component: Topbar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default = {
  render: () => (
    <Topbar
      left={<Icon name="home" size={28} />}
      center={<div style={{ width: 386 }}><InputText placeholder="Search here.." /></div>}
      right={<Icon name="export" size={28} />}
    />
  ),
};
