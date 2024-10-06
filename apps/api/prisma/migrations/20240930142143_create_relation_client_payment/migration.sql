-- AlterTable
ALTER TABLE "client" ALTER COLUMN "payId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_payId_fkey" FOREIGN KEY ("payId") REFERENCES "clientpayment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
