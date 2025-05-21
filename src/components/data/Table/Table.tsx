import { cn } from '@/lib/utils';
import { ColumnType } from '@/components/data/Table/Table.types';

type TableProps<T> = {
  data: T[];
  columns: ColumnType<T>[];
  caption?: string;
  className?: string;
};

export const Table = <T,>({ data, columns, caption, className }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className={cn('min-w-max table-auto w-full', className)}>
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                className={cn(
                  'text-left text-sm font-medium text-gray-700 px-4 py-2 border-b whitespace-nowrap',
                  col.className,
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-200">
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={cn('text-sm text-gray-800 px-4 py-2 whitespace-nowrap', col.className)}
                >
                  {col.render ? col.render(row) : String(row[col.key as keyof T])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
