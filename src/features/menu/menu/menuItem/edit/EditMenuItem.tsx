'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MenuItem } from '@/features/menu/menu/Menu.types';
import { EditMenuForm } from '@/features/menu/menu/menuItem/edit/EditMenuForm';

type Props = {
  item: MenuItem;
};

export const EditMenuItem = ({ item }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('pages.menu.edit');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button variant="outline" onClick={openModal}>{`Edit ${item.name}`}</Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t('title')}</DialogTitle>
            <DialogDescription>{t('subtitle')}</DialogDescription>
          </DialogHeader>
          <EditMenuForm item={item} closeModal={closeModal} />
        </DialogContent>
      </Dialog>
    </>
  );
};
