/*
  Warnings:

  - You are about to drop the column `paymentOptId` on the `userprofile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "userprofile" DROP CONSTRAINT "userprofile_paymentOptId_fkey";

-- DropIndex
DROP INDEX "userprofile_paymentOptId_idx";

-- AlterTable
ALTER TABLE "userprofile" DROP COLUMN "paymentOptId";
