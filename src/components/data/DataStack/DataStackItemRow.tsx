import { DataStackItemRowType } from '@/components/data/DataStack/DataStack.types';

type Props = DataStackItemRowType;

export const DataStackItemRow = ({ label, value }: Props) => {
  return (
    <div>
      <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>
      <div className="text-gray-900 mb-2">{value}</div>
    </div>
  );
};
