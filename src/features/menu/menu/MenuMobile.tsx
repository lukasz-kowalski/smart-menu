import { DataStack } from '@/components/data/DataStack/DataStack';
import { useMapMenuItems } from '@/features/menu/menu/hooks/useMapMenuItems';
import { Category } from '@/features/menu/menu/Menu.types';

type Props = {
  category: Category;
};

export const MenuMobile = ({ category }: Props) => {
  const { mapMenuItems } = useMapMenuItems();

  const mappedItems = mapMenuItems(category.items);

  return (
    <div className="md:hidden">
      <DataStack items={mappedItems} />
    </div>
  );
};
