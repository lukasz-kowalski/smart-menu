import { render, screen } from '@testing-library/react';

import { MenuDesktop } from '@/features/menu/menu/MenuDesktop';
import { Category } from '@/features/menu/menu/Menu.types';

describe('MenuDesktop', () => {
  it('should render MenuDesktop', () => {
    const category: Category = {
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
    };

    render(<MenuDesktop category={category} />);
    const mobileMenu = screen.getByTestId('menu-desktop');

    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveClass('hidden md:block');
  });
});
