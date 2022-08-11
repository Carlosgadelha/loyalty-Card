/*
  Warnings:

  - You are about to drop the column `cardId` on the `promotions` table. All the data in the column will be lost.
  - Added the required column `promotionId` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "promotions" DROP CONSTRAINT "promotions_cardId_fkey";

-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "promotionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "promotions" DROP COLUMN "cardId";

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "promotions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
