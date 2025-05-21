import { renderHook } from '@testing-library/react';

import { useMapMenuItems } from '@/features/menu/menu/hooks/useMapMenuItems';
import { MenuItem } from '@/features/menu/menu/Menu.types';

describe('useMapMenuItems', () => {
  it('should map menu items correctly', () => {
    const { result } = renderHook(() => useMapMenuItems());

    const input: MenuItem[] = [
      {
        id: '1',
        name: 'Pizza',
        description: 'Tasty pizza',
        price: 25,
        currency: 'USD',
        status: 'available',
      },
    ];

    const output = result.current.mapMenuItems(input);

    expect(output).toHaveLength(1);

    const item = output[0].item;
    expect(item[0].label).toBe('pages.menu.table.header.name');
    expect(item[0].value).toBe('Pizza');

    expect(item[1].label).toBe('pages.menu.table.header.description');
    expect(item[1].value).toBe('Tasty pizza');

    expect(item[2].label).toBe('pages.menu.table.header.price');
    expect(item[2].value).toBe('$25.00');

    expect(item[3].label).toBe('pages.menu.table.header.status');
    expect(item[3].value).toEqual(expect.anything());

    expect(item[4].label).toBe('pages.menu.table.header.actions');
    expect(item[4].value).toEqual(expect.anything());
  });
});
