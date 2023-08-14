// seed.ts

import { PrismaClient, Prisma } from '@prisma/client';
import { createPrisma, updatePrisma } from './receipt_service';
import { CreateReceiptDto } from './dto/createReceiptDto';
import { UpdateReceiptDto } from './dto/updateReceiptDto';

function create() {
  const receiptData: CreateReceiptDto = {
    receiptId: 'your-receipt-id', // Some unique id for the receipt
    customerName: 'John Doe',
    date: BigInt(Date.now()), // or any other BigInt value
    receiptItems: {
      create: [
        {
          receiptItemId: 'item1-id', // Some unique id for the receipt item
          itemName: 'Item 1 Name',
          itemPrice: 10.5,
          itemQuantity: 2,
        },
        {
          receiptItemId: 'item2-id', // Another unique id for the receipt item
          itemName: 'Item 2 Name',
          itemPrice: 15.75,
          itemQuantity: 1,
        },
        {
          receiptItemId: 'item3-id', // Another unique id for the receipt item
          itemName: 'Item 3 Name',
          itemPrice: 5.25,
          itemQuantity: 3,
        },
        {
          receiptItemId: 'item4-id', // Another unique id for the receipt item
          itemName: 'Item 4 Name',
          itemPrice: 20.0,
          itemQuantity: 1,
        },
      ],
    },
  };
  return receiptData;
}

function update() {
  const prisma = new PrismaClient({
    // log: ['query'],
  });

  const receiptIdToUpdate = 'your-receipt-id'; // Replace with your actual receiptId

  let data: UpdateReceiptDto = {
    // receiptId: '1234',
    customerName: 'bilal turi',
    receiptItems: {
      deleteMany: [
        { receiptItemId: 'item1-id' },
        { receiptItemId: 'item2-id' },
      ],
      updateMany: [
        {
          where: { receiptItemId: 'item3-id' },
          data: { itemPrice: 99 }, // Replace with your new price
        },
        {
          where: { receiptItemId: 'item4-id' },
          data: { itemPrice: 199 }, // Replace with your new price
        },
      ],
      create: [
        {
          receiptItemId: 'item5-id',
          itemName: 'Item 5 Name',
          itemPrice: 25.0,
          itemQuantity: 2,
        },
        {
          receiptItemId: 'item6-id',
          itemName: 'Item 6 Name',
          itemPrice: 30.0,
          itemQuantity: 1,
        },
      ],
    },
  };
  return { id: receiptIdToUpdate, data: data };
}

async function main() {
  const prisma = new PrismaClient({
    // log: ['query'],
  });
  let createRes: CreateReceiptDto = create();
  await createPrisma(prisma, createRes);

  let updateRes: { id: string; data: UpdateReceiptDto } = update();
  await updatePrisma(prisma, updateRes.id, updateRes.data);
}

main();
