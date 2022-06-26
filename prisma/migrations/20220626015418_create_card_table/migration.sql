-- CreateEnum
CREATE TYPE "CardFunction" AS ENUM ('CREDIT', 'DEBIT', 'CREDIT_DEBIT');

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "validity" TEXT NOT NULL,
    "limit" INTEGER NOT NULL,
    "cvc" INTEGER NOT NULL,
    "institution" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "function" "CardFunction" NOT NULL DEFAULT E'CREDIT_DEBIT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_number_key" ON "Card"("number");
