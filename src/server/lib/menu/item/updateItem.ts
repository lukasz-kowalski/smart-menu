import { MenuItem } from '@/features/menu/menu/Menu.types';

export const updateItem = (item: MenuItem) => {
  return fetch(`/api/menu/items/${item.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
};
