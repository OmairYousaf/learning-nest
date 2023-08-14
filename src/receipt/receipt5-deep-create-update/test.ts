// seed.ts

import { PrismaClient, Prisma } from '@prisma/client';
// import { createPrisma, updatePrisma } from './receipt_service';
// import { CreateReceiptDto } from './dto/createReceiptDto';
// import { UpdateReceiptDto } from './dto/updateReceiptDto';

async function main() {
  const prisma = new PrismaClient({
    // log: ['query'],
  });
  const newReceipt = await prisma.receipt.create({
    data: {
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
            ItemInspection: {
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
                  InspectBy: {
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
    },
  });
}

main();
