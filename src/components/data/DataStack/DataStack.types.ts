import { ReactNode } from 'react';

export type DataStackItemRowType = {
  label: string;
  value: string | ReactNode;
};

export type DataStackItemType = {
  item: DataStackItemRowType[];
};
