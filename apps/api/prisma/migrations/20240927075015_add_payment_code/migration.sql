/*
  Warnings:

  - A unique constraint covering the columns `[paymentCode]` on the table `paymentdetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `paymentCode` to the `paymentdetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "paymentdetails" ADD COLUMN     "paymentCode" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "paymentdetails_paymentCode_key" ON "paymentdetails"("paymentCode");
