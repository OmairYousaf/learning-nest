// seed.ts

import { PrismaClient, Prisma } from "@prisma/client";
import { createReceipt } from "./receipt0";
const prisma = new PrismaClient();

async function seed() {
  const prisma = new PrismaClient();
  let index = 44;
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

  createReceipt(prisma, data);

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

  console.log("Data seeded successfully.");
}

seed();
