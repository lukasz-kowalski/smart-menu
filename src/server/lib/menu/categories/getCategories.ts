import prisma from '@/server/lib/prisma';

export const getMenuCategories = async () => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        order: true,
        items: {
          select: {
            id: true,
            name: true,
            description: true,
            price: true,
            currency: true,
            status: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log(categories);

    return categories;
  } catch (error) {
    throw new Error('Internal Server Error', { cause: error });
  }
};
