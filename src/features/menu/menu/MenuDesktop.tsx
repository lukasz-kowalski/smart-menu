import { Table } from '@/components/data/Table';
import { Category, MenuItem } from '@/features/menu/menu/Menu.types';
import { useMenuColumns } from '@/features/menu/menu/hooks/useMenuColumns';

type Props = {
  category: Category;
};

export const MenuDesktop = ({ category }: Props) => {
  const { columns } = useMenuColumns();

  return (
    <div className="hidden md:block" data-testid="menu-desktop">
      <Table<MenuItem> columns={columns} data={category.items} />
    </div>
  );
};
