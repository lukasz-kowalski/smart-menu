import type { Meta, StoryObj } from '@storybook/react';

import { DataStack } from '@/components/data/DataStack/DataStack';

const items = [
  {
    item: [
      { label: 'Item 1', value: 'Value 1' },
      { label: 'Item 2', value: 'Value 2' },
      { label: 'Item 3', value: 'Value 3' },
      { label: 'Item 4', value: 'Value 4' },
    ],
  },
  {
    item: [
      { label: 'Item 1', value: 'Value 5' },
      { label: 'Item 2', value: 'Value 6' },
      { label: 'Item 3', value: 'Value 7' },
      { label: 'Item 4', value: 'Value 8' },
    ],
  },
];

const meta: Meta<typeof DataStack> = {
  title: 'Components/DataStack',
  component: DataStack,
  argTypes: {
    items: {
      control: 'object',
      defaultValue: items,
    },
  },
  args: {
    items,
  },
};

export default meta;
type Story = StoryObj<typeof DataStack>;

export const Default: Story = {};
