import { PrismaClient } from '@prisma/client';
import { CreateReceiptDto } from './dto/createReceiptDto';
import { UpdateReceiptDto } from './dto/updateReceiptDto';

export async function updatePrisma(
  prisma: PrismaClient,
  id: string,
  updateReceiptDto: UpdateReceiptDto,
) {
  const updatedReceipt = await prisma.receipt.update({
    where: {
      receiptId: id,
    },
    data: updateReceiptDto,
  });
  console.log('Data updated successfully.');
}

export async function createPrisma(
  prisma: PrismaClient,
  createReceiptDto: CreateReceiptDto,
) {
  const newReceipt = await prisma.receipt.create({
    data: createReceiptDto,
  });
  console.log('Data created successfully.');
}
