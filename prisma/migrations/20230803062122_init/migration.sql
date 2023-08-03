-- CreateTable
CREATE TABLE `User` (
    `userId` CHAR(40) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
