import { ReactNode } from 'react';

export type ColumnType<T> = {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  className?: string;
};
