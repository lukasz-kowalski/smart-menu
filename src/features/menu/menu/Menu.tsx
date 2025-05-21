'use client';

import { Category } from '@/features/menu/menu/Menu.types';
import { MenuDesktop } from '@/features/menu/menu/MenuDesktop';
import { MenuMobile } from '@/features/menu/menu/MenuMobile';
import { Accordion } from '@/components/data/Accordion';

type Props = {
  menu: Category[];
};

export const Menu = ({ menu }: Props) => {
  return (
    <div className="overflow-x-auto space-y-4" data-testid="menu">
      {menu.map((category) => {
        return (
          <Accordion key={category.id} title={category.name}>
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
