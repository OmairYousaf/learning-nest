import { Prisma, PrismaClient } from '@prisma/client';
import { CreateReceiptDto } from './dto/createReceiptDto';
import { randomUUID } from 'crypto';

export async function createReceipt(
  prisma: PrismaClient,
  createReceiptDto: CreateReceiptDto,
) {
  let { receiptItems, ...baseReceipt } = createReceiptDto;

  let newItems = receiptItems.map((v) => {
    return { ...v, receiptItemId: randomUUID() };
  });

  let receiptData: Prisma.ReceiptUncheckedCreateInput = {
    receiptId: randomUUID(),
    ...baseReceipt,
    receiptItems: {
      create: newItems,
    },
  };

  const receipt = await prisma.receipt.create({ data: receiptData });

  return receipt;
}
/*
  let data: CreateReceiptDto = {
    customerName: "Khan",
    date: 443234n,
    receiptItems: [
      {
        itemName: "Table",
        itemPrice: 10.0,
        itemQuantity: 2,
      },
      {
        itemName: "Chair",
        itemPrice: 11.0,
        itemQuantity: 3,
      },
    ],
  };

  
let data: Prisma.ReceiptUncheckedCreateInput = {
  receiptId: `receit-${index}`,
  customerName: "Khan",
  date: 443234,
  receiptItems: {
    create: [
      {
        receiptItemId: `receiptItem-${index}-001`,
        itemName: "Table",
        itemPrice: 10.0,
        itemQuantity: 2,
      },
      {
        receiptItemId: `receiptItem-${index}-002`,
        itemName: "Chair",
        itemPrice: 11.0,
        itemQuantity: 3,
      },
    ],
  },
};

*/
