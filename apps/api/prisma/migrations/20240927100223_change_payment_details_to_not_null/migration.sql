-- AlterTable
ALTER TABLE "paymentdetails" ALTER COLUMN "bankAccount" DROP NOT NULL,
ALTER COLUMN "accountNumber" DROP NOT NULL,
ALTER COLUMN "accountName" DROP NOT NULL;
