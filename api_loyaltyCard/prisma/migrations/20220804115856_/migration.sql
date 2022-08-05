/*
  Warnings:

  - Added the required column `pointsNeeded` to the `promotions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "promotions" ADD COLUMN     "pointsNeeded" INTEGER NOT NULL;
