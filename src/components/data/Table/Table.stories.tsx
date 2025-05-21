import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '@/components/data/Table/Table';
import { ColumnType } from '@/components/data/Table/Table.types';

type User = {
  id: number;
  name: string;
  email: string;
};

const data: User[] = [
  { id: 1, name: 'Anna Nowak', email: 'anna@example.com' },
  { id: 2, name: 'Jan Kowalski', email: 'jan@example.com' },
  { id: 3, name: 'Adam Kowalski', email: 'adam@example.com' },
  { id: 4, name: 'John Nowak', email: 'john@example.com' },
];

const columns: ColumnType<User>[] = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email', className: 'text-blue-600' },
];

const meta: Meta<typeof Table<User>> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table<User>>;

export const Default: Story = {
  render: () => <Table<User> data={data} columns={columns} caption="User list" />,
};
