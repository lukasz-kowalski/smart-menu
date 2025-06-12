import { PrismaClient } from '@prisma/client';
import { seedCategories } from './seedCategories';
import { seedMenuItems } from './seedMenuItems';

const prisma = new PrismaClient();

const main = async () => {
  console.log('Seeding categories...');
  await seedCategories();

  console.log('Seeding menu items...');
  await seedMenuItems();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
