// seed.ts

import { PrismaClient, Prisma } from '@prisma/client';
// import { createPrisma, updatePrisma } from './receipt_service';
// import { CreateReceiptDto } from './dto/createReceiptDto';
// import { UpdateReceiptDto } from './dto/updateReceiptDto';

async function main() {
  const prisma = new PrismaClient({
    // log: ['query'],
  });
  const updatedReceipt = await prisma.receipt.update({
    where: { receiptId: 'some-id-1' },
    data: {
      receiptItems: {
        delete: { receiptItemId: 'item-id-1' },
        update: [
          {
            where: { receiptItemId: 'item-id-2' },
            data: {
              itemPrice: 80.0,
              ItemInspection: {
                deleteMany: [
                  { itemInspectionId: 'inspection-id-1' },
                  { itemInspectionId: 'inspection-id-2' },
                ],
                update: [
                  {
                    where: { itemInspectionId: 'inspection-id-3' },
                    data: {
                      comments: 'Very Bad',
                      InspectBy: {
                        delete: { inspectById: 'inspectby-id-3' },
                        update: {
                          where: { inspectById: 'inspectby-id-2' },
                          data: { age: 80 },
                        },
                      },
                    },
                  },
                  {
                    where: { itemInspectionId: 'inspection-id-4' },
                    data: {
                      InspectBy: {
                        create: {
                          inspectById: 'new-inspectby-id',
                          name: 'New Inspector',
                          age: 25,
                        },
                      },
                    },
                  },
                ],
                create: [
                  {
                    itemInspectionId: 'new-inspection-id-1',
                    date: BigInt(Date.now()),
                    comments: 'New Comment 1',
                    InspectBy: {
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
                    InspectBy: {
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
    },
  });
}

main();
