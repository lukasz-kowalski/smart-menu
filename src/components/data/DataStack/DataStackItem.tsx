import { DataStackItemRow } from '@/components/data/DataStack/DataStackItemRow';
import { DataStackItemType } from '@/components/data/DataStack/DataStack.types';

type Props = DataStackItemType;

export const DataStackItem = ({ item }: Props) => {
  return (
    <div
      data-testid="data-stack-item"
      className="rounded-lg border border-gray-200 p-4 shadow-sm divide-y divide-gray-200 space-y-4"
    >
      {item.map((row) => (
        <DataStackItemRow key={row.label} label={row.label} value={row.value} />
      ))}
    </div>
  );
};
