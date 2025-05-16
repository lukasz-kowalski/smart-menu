import type { Meta, StoryObj } from '@storybook/react';
import { Home } from 'lucide-react';

import { Button } from '@/components/action/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral', 'danger', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} iconLeft={<Home />}>
        With left icon
      </Button>
      <Button {...args} iconRight={<Home />}>
        With right icon
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-x-2">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="full">
        Full Width
      </Button>
    </div>
  ),
};
