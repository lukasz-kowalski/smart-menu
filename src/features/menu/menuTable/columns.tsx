'use client';

import { ColumnDef } from '@tanstack/react-table';

import { MenuItem } from '@/features/menu/menuTable/MenuTable.types';

export const columns: ColumnDef<MenuItem>[] = [
  {
    accessorKey: 'name',
    header: 'name',
  },
  {
    accessorKey: 'description',
    header: 'description',
  },
  {
    accessorKey: 'price',
    header: 'price',
  },
  {
    accessorKey: 'status',
    header: 'status',
  },
  {
    id: 'actions',
    header: 'actions',
    cell: ({ row }) => {
      return <button>Edit {row.original.name}</button>;
    },
  },
];
