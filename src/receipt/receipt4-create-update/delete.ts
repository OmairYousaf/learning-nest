// seed.ts

import { PrismaClient, Prisma } from '@prisma/client';
import { createReceipt } from './receipt1';
// import { CreateReceiptDto } from './dto/createReceiptDto';

async function seed() {
  const prisma = new PrismaClient({
    // log: ['query'],
  });
  await prisma.receiptItem.deleteMany();
  await prisma.receipt.deleteMany();
}

seed();
