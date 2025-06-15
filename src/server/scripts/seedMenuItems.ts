import prisma from '../lib/prisma';

import { MenuItemStatus, Currency } from '../types/enums';

export const seedMenuItems = async () => {
  const category = await prisma.category.findFirst({
    where: { name: 'Pizza' },
  });

  if (!category) {
    throw new Error('Category "pizza" not found');
  }

  const pizzaItems = [
    {
      name: 'Margherita',
      description: 'Classic pizza with tomato sauce, mozzarella and basil',
      price: 25.99,
      currency: Currency.USD,
      status: MenuItemStatus.AVAILABLE,
      categoryId: category.id,
    },
    {
      name: 'Pepperoni',
      description: 'Spicy pepperoni with mozzarella and tomato sauce',
      price: 28.99,
      currency: Currency.USD,
      status: MenuItemStatus.AVAILABLE,
      categoryId: category.id,
    },
    {
      name: 'Quattro Formaggi',
      description: 'Mozzarella, gorgonzola, parmesan and fontina cheese',
      price: 32.5,
      currency: Currency.USD,
      status: MenuItemStatus.AVAILABLE,
      categoryId: category.id,
    },
    {
      name: 'Hawaiian',
      description: 'Ham, pineapple, mozzarella and tomato sauce',
      price: 29.99,
      currency: Currency.USD,
      status: MenuItemStatus.UNAVAILABLE,
      categoryId: category.id,
    },
    {
      name: 'Vegetariana',
      description: 'Grilled vegetables, mozzarella, tomato sauce and herbs',
      price: 27.5,
      currency: Currency.USD,
      status: MenuItemStatus.AVAILABLE,
      categoryId: category.id,
    },
  ];

  const createdItems = await prisma.menuItem.createMany({
    data: pizzaItems,
  });

  console.log(`Added ${createdItems.count} menu items.`);
};
