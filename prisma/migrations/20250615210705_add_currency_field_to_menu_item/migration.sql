-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'EUR', 'GBP', 'PLN');

-- AlterTable
ALTER TABLE "MenuItem" ADD COLUMN     "currency" "Currency" NOT NULL DEFAULT 'USD';
