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
    receiptItems: {
      deleteMany: [{ receiptItemId: 'item-id-1' }],
      updateMany: [
        {
          where: { receiptItemId: 'item-id-2' },
          data: {
            itemPrice: 80.0,
            itemInspections: {
              deleteMany: [
                { itemInspectionId: 'inspection-id-1' },
                { itemInspectionId: 'inspection-id-2' },
              ],
              updateMany: [
                {
                  where: { itemInspectionId: 'inspection-id-3' },
                  data: {
                    comments: 'Very Bad',
                    inspectBys: {
                      deleteMany: [{ inspectById: 'inspectby-id-3' }],
                      updateMany: [
                        {
                          where: { inspectById: 'inspectby-id-2' },
                          data: { age: 80 },
                        },
                      ],
                    },
                  },
                },
                {
                  where: { itemInspectionId: 'inspection-id-4' },
                  data: {
                    inspectBys: {
                      create: [
                        {
                          inspectById: 'new-inspectby-id',
                          name: 'New Inspector',
                          age: 25,
                        },
                      ],
                    },
                  },
                },
              ],
              create: [
                {
                  itemInspectionId: 'new-inspection-id-1',
                  date: BigInt(Date.now()),
                  comments: 'New Comment 1',
                  inspectBys: {
                    create: [
                      {
                        inspectById: 'new-inspectby-id-1',
                        name: 'Inspector A',
                        age: 40,
                      },
                      {
                        inspectById: 'new-inspectby-id-2',
                        name: 'Inspector B',
                        age: 45,
                      },
                    ],
                  },
                },
                {
                  itemInspectionId: 'new-inspection-id-2',
                  date: BigInt(Date.now()),
                  comments: 'New Comment 2',
                  inspectBys: {
                    create: [
                      {
                        inspectById: 'new-inspectby-id-3',
                        name: 'Inspector C',
                        age: 50,
                      },
                      {
                        inspectById: 'new-inspectby-id-4',
                        name: 'Inspector D',
                        age: 55,
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
      ],
      create: [
        {
          receiptItemId: 'item-id-100',
          itemName: 'Item 100',
          itemPrice: 100.0,
          itemQuantity: 100,
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
  // let createRes: CreateReceiptDto = create();
  // await createPrisma(prisma, createRes);

  let updateRes: { id: string; data: UpdateReceiptDto } = update();
  await updatePrisma(prisma, updateRes.id, updateRes.data);
}

main();
