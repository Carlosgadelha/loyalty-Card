/*
  Warnings:

  - You are about to drop the `purchases` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[code]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "code" TEXT NOT NULL;

-- DropTable
DROP TABLE "purchases";

-- CreateIndex
CREATE UNIQUE INDEX "users_code_key" ON "users"("code");
