import { PrismaClient, Prisma } from '@prisma/client';

async function seed() {
  const prisma = new PrismaClient({});
  await prisma.receiptItem.deleteMany();
  await prisma.receipt.deleteMany();
}

seed();
