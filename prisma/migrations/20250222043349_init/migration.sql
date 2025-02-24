/*
  Warnings:

  - Added the required column `LaItude` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LongItude` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "LaItude" TEXT NOT NULL,
ADD COLUMN     "LongItude" TEXT NOT NULL;
