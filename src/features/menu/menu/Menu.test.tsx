import { render, screen } from '@testing-library/react';

import { Menu } from '@/features/menu/menu/Menu';
import { Category } from '@/features/menu/menu/Menu.types';

describe('Menu', () => {
  it('should render Menu', () => {
    const menu: Category[] = [
      {
        id: '1',
        name: 'Pizza',
        order: 1,
        items: [
          {
            id: '11',
            name: 'Margherita',
            description: 'Classic pizza',
            price: 10,
            status: 'available',
            currency: 'EUR',
          },
          {
            id: '12',
            name: 'Toscana',
            description: 'Good pizza',
            price: 12,
            status: 'available',
            currency: 'USD',
          },
        ],
      },
    ];

    render(<Menu menu={menu} />);
    const mobileMenu = screen.getByTestId('menu');

    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveClass('overflow-x-auto space-y-4');
  });
});
