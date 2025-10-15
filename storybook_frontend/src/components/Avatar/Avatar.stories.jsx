import Avatar from './Avatar';
import AvatarStack from './AvatarStack';
const samplePng = '/assets/figma_image_0_69.png';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

export const Image = { args: { src: samplePng, size: 50, alt: 'Sample' } };
export const Initials = { args: { initials: 'JD', size: 50 } };

export const Stack = {
  render: () => (
    <AvatarStack
      size={50}
      avatars={[
        { src: samplePng },
        { initials: 'AB' },
        { initials: 'CD' },
        { initials: 'EF' },
      ]}
    />
  ),
};
