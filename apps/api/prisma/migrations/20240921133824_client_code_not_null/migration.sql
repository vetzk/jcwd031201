/*
  Warnings:

  - Made the column `clientCode` on table `client` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "client" ALTER COLUMN "clientCode" SET NOT NULL;
