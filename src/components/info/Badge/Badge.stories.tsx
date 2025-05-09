import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/components/info/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'neutral', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Important info',
    variant: 'info',
    size: 'md',
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Info: Story = {
  args: {
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-x-2">
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="md">
        Medium
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
    </div>
  ),
};
