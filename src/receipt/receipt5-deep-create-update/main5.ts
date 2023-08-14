// seed.ts

import { PrismaClient, Prisma } from '@prisma/client';
import { createPrisma, updatePrisma } from './receipt_service';
import { CreateReceiptDto } from './dto/createReceiptDto';
import { UpdateReceiptDto } from './dto/updateReceiptDto';

function create() {
  const receiptData: CreateReceiptDto = {
    receiptId: 'some-id-1',
    customerName: 'John Doe',
    date: BigInt(Date.now()),
    receiptItems: {
      create: [
        {
          receiptItemId: 'item-id-1',
          itemName: 'Item 1',
          itemPrice: 10.0,
          itemQuantity: 1,
        },
        {
          receiptItemId: 'item-id-2',
          itemName: 'Item 2',
          itemPrice: 20.0,
          itemQuantity: 2,
          itemInspections: {
            create: [
              {
                itemInspectionId: 'inspection-id-1',
                date: BigInt(Date.now()),
                comments: 'Good',
              },
              {
                itemInspectionId: 'inspection-id-2',
                date: BigInt(Date.now()),
                comments: 'Fair',
              },
              {
                itemInspectionId: 'inspection-id-3',
                date: BigInt(Date.now()),
                comments: 'Excellent',
                inspectBys: {
                  create: [
                    {
                      inspectById: 'inspectby-id-1',
                      name: 'Inspector 1',
                      age: 30,
                    },
                    {
                      inspectById: 'inspectby-id-2',
                      name: 'Inspector 2',
                      age: 32,
                    },
                    {
                      inspectById: 'inspectby-id-3',
                      name: 'Inspector 3',
                      age: 28,
                    },
                    {
                      inspectById: 'inspectby-id-4',
                      name: 'Inspector 4',
                      age: 35,
                    },
                  ],
                },
              },
              {
                itemInspectionId: 'inspection-id-4',
                date: BigInt(Date.now()),
                comments: 'Poor',
              },
            ],
          },
        },
        {
          receiptItemId: 'item-id-3',
          itemName: 'Item 3',
          itemPrice: 30.0,
          itemQuantity: 3,
        },
        {
          receiptItemId: 'item-id-4',
          itemName: 'Item 4',
          itemPrice: 40.0,
          itemQuantity: 4,
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

  // let updateRes: { id: string; data: UpdateReceiptDto } = update();
  // await updatePrisma(prisma, updateRes.id, updateRes.data);
}

main();
