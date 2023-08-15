import { Prisma, PrismaClient } from '@prisma/client';

export async function createReceipt(
  prisma: PrismaClient,
  data: Prisma.ReceiptUncheckedCreateInput,
) {
  const receipt = await prisma.receipt.create({ data: data });
  console.log(receipt);
}
