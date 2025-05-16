import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '@/components/data/Accordion';

const content = <div className="p-4">Content</div>;

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral', 'danger', 'outline'],
    },
    title: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: content,
    title: 'Accordion Title',
    variant: 'neutral',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    variant: 'neutral',
  },
};
