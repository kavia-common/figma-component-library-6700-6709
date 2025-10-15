const meta = {
  title: 'Static Screens/Dashboard Dark (0:3)',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A static export of the Dashboard Dark screen (Figma 0:3), served from /static via Storybook staticDirs. Includes semantic landmarks, skip link, and auto-scaling.',
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
  parameters: {
    docs: {
      description: {
        story:
          'Use the Viewport addon to preview scaling. The inner page uses ResizeObserver + transform scale to preserve pixel-perfect baseline at the target desktop width.',
      },
    },
  },
};

export const NarrowView = {
  name: 'Narrow viewport (responsive scaling demo)',
  render: () => (
    <div style={{ width: 800, height: '100vh', margin: '0 auto', background: 'var(--ocean-bg-900)', border: '1px solid var(--border-subtle)' }}>
      <iframe
        title="Dashboard Dark Narrow"
        src="/static/dashboard-dark-0-3.html"
        style={{ width: '100%', height: '100%', border: 0, background: 'var(--ocean-bg-900)' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This story constrains the outer container to ~800px width to illustrate the inner auto-scale behavior without overlap.',
      },
    },
  },
};
