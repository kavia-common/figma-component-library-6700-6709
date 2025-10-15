const meta = {
  title: 'Static Screens/Dashboard Dark (0:3)',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A static export of the Dashboard Dark screen (Figma 0:3), served from /static via Storybook staticDirs.',
      },
    },
  },
};
export default meta;

export const Preview = {
  name: 'Dashboard Dark (0:3)',
  render: () => (
    <div style={{ width: '100%', height: '100vh', background: 'var(--ocean-bg-900)' }}>
      <iframe
        title="Dashboard Dark 0:3"
        src="/static/dashboard-dark-0-3.html"
        style={{ width: '100%', height: '100%', border: 0, background: 'var(--ocean-bg-900)' }}
      />
    </div>
  ),
};
