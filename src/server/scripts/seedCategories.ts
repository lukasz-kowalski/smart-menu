import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedCategories = async () => {
  const category = await prisma.category.create({
    data: {
      name: 'pizza',
    },
  });

  console.log('Created category:', category);
};
