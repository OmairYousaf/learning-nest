-- CreateTable
CREATE TABLE `ItemInspection` (
    `itemInspectionId` CHAR(40) NOT NULL,
    `date` BIGINT NOT NULL,
    `comments` CHAR(40) NOT NULL,
    `receiptItemId` CHAR(40) NOT NULL,

    PRIMARY KEY (`itemInspectionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InspectBy` (
    `inspectById` CHAR(40) NOT NULL,
    `name` CHAR(40) NOT NULL,
    `age` INTEGER NOT NULL,
    `itemInspectionId` CHAR(40) NOT NULL,

    PRIMARY KEY (`inspectById`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ItemInspection` ADD CONSTRAINT `ItemInspection_receiptItemId_fkey` FOREIGN KEY (`receiptItemId`) REFERENCES `ReceiptItem`(`receiptItemId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectBy` ADD CONSTRAINT `InspectBy_itemInspectionId_fkey` FOREIGN KEY (`itemInspectionId`) REFERENCES `ItemInspection`(`itemInspectionId`) ON DELETE RESTRICT ON UPDATE CASCADE;
