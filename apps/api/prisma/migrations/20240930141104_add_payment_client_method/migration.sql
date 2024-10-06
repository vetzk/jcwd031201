-- CreateEnum
CREATE TYPE "paymentmethod" AS ENUM ('GOPAY', 'OVO', 'DANA', 'CREDIT_CARD', 'COD', 'BANK_VA', 'BANK_TRANSFER', 'PAYLATER');

-- AlterTable
ALTER TABLE "client" ADD COLUMN     "payId" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "clientpayment" (
    "id" SERIAL NOT NULL,
    "paymentMethod" "paymentmethod" NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clientpayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_payId_fkey" FOREIGN KEY ("payId") REFERENCES "clientpayment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
