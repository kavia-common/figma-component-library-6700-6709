/**
 * Introduction/Welcome story (CSF) to avoid MDX indexer issues.
 * Renders a simple overview and quick commands.
 */

const meta = {
  title: 'Introduction/Welcome',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Welcome to the Ocean Professional component library. Use the sidebar to explore components.',
      },
    },
  },
};
export default meta;

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="sb-surface" style={{ maxWidth: 720 }}>
      <h1>Ocean Professional Component Library</h1>
      <p>
        Welcome to the component library. Use the sidebar to explore components.
      </p>
      <ul>
        <li>Start Storybook on port 3000: <code>npm start</code></li>
        <li>Build Storybook: <code>npm run build-storybook</code></li>
      </ul>
      <p style={{ color: 'var(--sb-muted)' }}>
        Storybook binds to 0.0.0.0 for container checks and is served at http://localhost:3000.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This page is implemented as a standard CSF story to ensure compatibility with Storybook 8 indexers.',
      },
    },
  },
};
