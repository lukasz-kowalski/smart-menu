'use client';

import { Category } from '@/features/menu/menu/Menu.types';
import { MenuMobile } from '@/features/menu/menu/MenuMobile';
import { Accordion } from '@/components/data/Accordion';

type Props = {
  menu: Category[];
};

export const Menu = ({ menu }: Props) => {
  return (
    <div className="w-full overflow-x-auto space-y-4">
      {menu.map((category) => {
        return (
          <Accordion key={category.id} title={category.name}>
            {/* Mobile Stack */}
            <MenuMobile category={category} />
          </Accordion>
        );
      })}
    </div>
  );
};
