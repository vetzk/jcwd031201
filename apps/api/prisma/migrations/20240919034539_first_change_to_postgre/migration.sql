-- CreateEnum
CREATE TYPE "paymentoptions_paymentType" AS ENUM ('CASH', 'BANK_TRANSFER');

-- CreateEnum
CREATE TYPE "invoice_invoiceStatus" AS ENUM ('PAID', 'UNPAID', 'OVERDUE');

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "categoryName" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "invoiceCode" VARCHAR(255) NOT NULL,
    "invoiceDate" TIMESTAMP(3) NOT NULL,
    "nextInvoiceDate" TIMESTAMP(3) NOT NULL,
    "invoiceStatus" "invoice_invoiceStatus" NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subTotal" INTEGER NOT NULL,
    "paymentOptId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoicedetail" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "invoiceId" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "priceUnit" INTEGER NOT NULL,
    "priceTotal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoicedetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paymentdetails" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "paymentOptId" INTEGER NOT NULL,
    "bankAccount" VARCHAR(255) NOT NULL,
    "accountNumber" VARCHAR(255) NOT NULL,
    "accountName" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "paymentdetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paymentoptions" (
    "id" SERIAL NOT NULL,
    "paymentType" "paymentoptions_paymentType" NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "paymentoptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productCode" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "identificationId" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "lastLoginAttempt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "loginAttempt" INTEGER NOT NULL DEFAULT 0,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userprofile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "companyName" VARCHAR(255),
    "profilePicture" VARCHAR(255),
    "address" VARCHAR(255),
    "phone" VARCHAR(255),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isCreated" BOOLEAN NOT NULL DEFAULT false,
    "paymentOptId" INTEGER NOT NULL,

    CONSTRAINT "userprofile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "invoice_clientId_idx" ON "invoice"("clientId");

-- CreateIndex
CREATE INDEX "invoice_userId_idx" ON "invoice"("userId");

-- CreateIndex
CREATE INDEX "invoice_paymentOptId_idx" ON "invoice"("paymentOptId");

-- CreateIndex
CREATE INDEX "invoicedetail_productId_idx" ON "invoicedetail"("productId");

-- CreateIndex
CREATE INDEX "invoicedetail_invoiceId_idx" ON "invoicedetail"("invoiceId");

-- CreateIndex
CREATE INDEX "paymentdetails_userId_idx" ON "paymentdetails"("userId");

-- CreateIndex
CREATE INDEX "paymentdetails_paymentOptId_idx" ON "paymentdetails"("paymentOptId");

-- CreateIndex
CREATE UNIQUE INDEX "product_productCode_key" ON "product"("productCode");

-- CreateIndex
CREATE INDEX "product_userId_idx" ON "product"("userId");

-- CreateIndex
CREATE INDEX "product_categoryId_idx" ON "product"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "user_identificationId_key" ON "user"("identificationId");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "userprofile_userId_idx" ON "userprofile"("userId");

-- CreateIndex
CREATE INDEX "userprofile_paymentOptId_idx" ON "userprofile"("paymentOptId");

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_paymentOptId_fkey" FOREIGN KEY ("paymentOptId") REFERENCES "paymentoptions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "invoicedetail" ADD CONSTRAINT "invoicedetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "invoicedetail" ADD CONSTRAINT "invoicedetail_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "paymentdetails" ADD CONSTRAINT "paymentdetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "paymentdetails" ADD CONSTRAINT "paymentdetails_paymentOptId_fkey" FOREIGN KEY ("paymentOptId") REFERENCES "paymentoptions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userprofile" ADD CONSTRAINT "userprofile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userprofile" ADD CONSTRAINT "userprofile_paymentOptId_fkey" FOREIGN KEY ("paymentOptId") REFERENCES "paymentoptions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
