'use client';

import { useCategories } from '@/hooks/api/menu/categories/useCategories';
import { Category } from '@/features/menu/menu/Menu.types';
import { MenuDesktop } from '@/features/menu/menu/MenuDesktop';
import { MenuMobile } from '@/features/menu/menu/MenuMobile';
import { Accordion, AccordionVariant } from '@/components/data/Accordion';
import { getVariant } from '@/lib/styles/getVariant';

type Props = {
  initialData: Category[];
};

const categoryVariants: AccordionVariant[] = ['green', 'neutral', 'red', 'yellow', 'blue'];

export const Menu = ({ initialData }: Props) => {
  const { data: menu } = useCategories(initialData);

  return (
    <div className="overflow-x-auto space-y-4" data-testid="menu">
      {menu.map((category, categoryIndex) => {
        const variant = getVariant(categoryVariants, categoryIndex);

        return (
          <Accordion key={category.id} title={category.name} variant={variant}>
            {/* Mobile Stack */}
            <MenuMobile category={category} />

            {/* Desktop Table */}
            <MenuDesktop category={category} />
          </Accordion>
        );
      })}
    </div>
  );
};
