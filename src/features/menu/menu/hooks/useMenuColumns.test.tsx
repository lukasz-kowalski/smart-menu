import { renderHook } from '@testing-library/react';

import { useMenuColumns } from '@/features/menu/menu/hooks/useMenuColumns';
import { MenuItem } from '@/features/menu/menu/Menu.types';

describe('useMenuColumns', () => {
  it('should map menu items correctly', () => {
    const { result } = renderHook(() => useMenuColumns());

    const row: MenuItem = {
      id: '1',
      name: 'Pizza',
      description: 'Tasty pizza',
      price: 25,
      currency: 'USD',
      status: 'available',
    };

    const output = result.current.columns;

    expect(output[0].key).toBe('name');
    expect(output[0].header).toBe('pages.menu.table.header.name');

    expect(output[1].key).toBe('description');
    expect(output[1].header).toBe('pages.menu.table.header.description');

    expect(output[2].key).toBe('price');
    expect(output[2].header).toBe('pages.menu.table.header.price');
    expect(output[2].render?.(row)).toBe('$25.00');

    expect(output[3].key).toBe('status');
    expect(output[3].header).toBe('pages.menu.table.header.status');
    expect(output[3].render?.(row)).toEqual(expect.anything());

    expect(output[4].key).toBe('actions');
    expect(output[4].header).toBe('pages.menu.table.header.actions');
    expect(output[4].render?.(row)).toEqual(expect.anything());
  });
});
