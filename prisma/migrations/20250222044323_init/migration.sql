/*
  Warnings:

  - You are about to drop the column `LaItude` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `LongItude` on the `Task` table. All the data in the column will be lost.
  - Added the required column `laItude` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longItude` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "LaItude",
DROP COLUMN "LongItude",
ADD COLUMN     "laItude" TEXT NOT NULL,
ADD COLUMN     "longItude" TEXT NOT NULL;
