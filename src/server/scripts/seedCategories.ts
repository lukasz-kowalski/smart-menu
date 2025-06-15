import prisma from '../lib/prisma';

export const seedCategories = async () => {
  const category = await prisma.category.create({
    data: {
      name: 'Pizza',
      order: 0,
    },
  });

  console.log('Created category:', category);
};
