/*
  Warnings:

  - You are about to drop the column `paymentOptId` on the `invoice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "invoice" DROP CONSTRAINT "invoice_paymentOptId_fkey";

-- DropIndex
DROP INDEX "invoice_paymentOptId_idx";

-- AlterTable
ALTER TABLE "invoice" DROP COLUMN "paymentOptId",
ADD COLUMN     "paymentId" INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE INDEX "invoice_paymentId_idx" ON "invoice"("paymentId");

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "paymentdetails"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
