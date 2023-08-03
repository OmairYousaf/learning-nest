-- CreateTable
CREATE TABLE `Receipt` (
    `receiptId` CHAR(40) NOT NULL,
    `customerName` VARCHAR(20) NULL,
    `date` BIGINT NOT NULL,

    PRIMARY KEY (`receiptId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReceiptItem` (
    `receiptItemId` CHAR(40) NOT NULL,
    `itemName` CHAR(40) NOT NULL,
    `itemPrice` DOUBLE NOT NULL,
    `itemQuantity` INTEGER NOT NULL,
    `receiptId` CHAR(40) NOT NULL,

    PRIMARY KEY (`receiptItemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReceiptItem` ADD CONSTRAINT `ReceiptItem_receiptId_fkey` FOREIGN KEY (`receiptId`) REFERENCES `Receipt`(`receiptId`) ON DELETE RESTRICT ON UPDATE CASCADE;
