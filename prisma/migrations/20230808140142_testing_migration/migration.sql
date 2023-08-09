/*
  Warnings:

  - Added the required column `receiptName` to the `Receipt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable

ALTER TABLE `Receipt` ADD COLUMN `receiptName` VARCHAR(191) NOT NULL;
Update `Receipt`
set `receiptName`=(select `customerName`);