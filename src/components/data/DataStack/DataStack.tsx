import { v4 as uuidv4 } from 'uuid';

import { DataStackItem } from '@/components/data/DataStack/DataStackItem';
import { DataStackItemType } from '@/components/data/DataStack/DataStack.types';

type Props = {
  items: DataStackItemType[];
};

export const DataStack = ({ items }: Props) => {
  return (
    <div className="space-y-4" data-testid="data-stack">
      {items.map((stackData) => {
        const id = uuidv4();

        return <DataStackItem key={id} item={stackData.item} />;
      })}
    </div>
  );
};
