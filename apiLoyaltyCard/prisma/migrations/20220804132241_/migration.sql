/*
  Warnings:

  - The `points` column on the `cards` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "points",
ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 1;
