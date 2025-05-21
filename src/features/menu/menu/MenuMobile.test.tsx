import { render, screen } from '@testing-library/react';

import { MenuMobile } from '@/features/menu/menu/MenuMobile';
import { Category } from '@/features/menu/menu/Menu.types';

describe('MenuMobile', () => {
  it('should render MenuMobile', () => {
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

    render(<MenuMobile category={category} />);
    const mobileMenu = screen.getByTestId('menu-mobile');

    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveClass('md:hidden');
  });
});
