import Toast from './Toast';
import Button from '../Button';

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: { control: { type: 'select' }, options: ['success', 'info', 'warning', 'error'] },
    title: { control: 'text' },
    message: { control: 'text' },
  },
};
export default meta;

export const Info = {
  args: {
    type: 'info',
    title: 'Heads up',
    message: 'This is an informational message for the user.',
  },
};

export const WithAction = {
  args: {
    type: 'success',
    title: 'Saved',
    message: 'Your changes have been saved.',
    actions: <Button>Undo</Button>,
  },
};
