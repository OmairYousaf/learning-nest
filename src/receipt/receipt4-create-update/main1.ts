// seed.ts

import { PrismaClient, Prisma } from '@prisma/client';
import { createReceipt } from './receipt1';
import { CreateReceiptDto } from './dto/createReceiptDto';

async function seed() {
  const prisma = new PrismaClient({
    // log: ['query'],
  });

  let data: CreateReceiptDto = {
    customerName: 'Khan',
    date: 443234n,
    receiptItems: [
      {
        itemName: 'Table',
        itemPrice: 10.0,
        itemQuantity: 2,
      },
      {
        itemName: 'Chair',
        itemPrice: 11.0,
        itemQuantity: 3,
      },
    ],
  };

  let receipt = await createReceipt(prisma, data);
  console.log(receipt);

  // Create ReceitItems and associate them with the created Receit using 'connect'
  // for (let itemNumber = 1; itemNumber <= 5; itemNumber++) {
  //   await prisma.receiptItem.create({
  //     data: {
  //       receiptItemId: `receit-${receitNumber}-item-${itemNumber}`,
  //       itemName: `Item ${itemNumber}`,
  //       itemPrice: 10.0,
  //       itemQuantity: 2,
  //       receiptId: receipt.receiptId,
  //     },
  //   });
  // }

  console.log('Data seeded successfully.');
}

seed();
