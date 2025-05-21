import { render, screen } from '@testing-library/react';

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
];

const columns: ColumnType<User>[] = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
];

describe('Table', () => {
  it('should render caption when provided', () => {
    render(<Table<User> data={data} columns={columns} caption="User list" />);
    expect(screen.getByText('User list')).toBeInTheDocument();
  });

  it('should render correct number of rows', () => {
    render(<Table<User> data={data} columns={columns} />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(data.length + 1);
  });

  it('should render correct column headers', () => {
    render(<Table<User> data={data} columns={columns} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('should render cell content', () => {
    render(<Table<User> data={data} columns={columns} />);
    expect(screen.getByText('Anna Nowak')).toBeInTheDocument();
    expect(screen.getByText('jan@example.com')).toBeInTheDocument();
  });

  it('should support custom render function', () => {
    const columnsWithRender: ColumnType<User>[] = [
      {
        key: 'name',
        header: 'Name',
        render: (row) => <strong>{row.name}</strong>,
      },
    ];
    render(<Table<User> data={data} columns={columnsWithRender} />);
    expect(screen.getByText('Anna Nowak').tagName).toBe('STRONG');
  });
});
