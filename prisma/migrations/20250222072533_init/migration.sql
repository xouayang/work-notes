/*
  Warnings:

  - You are about to drop the column `amoutPeople` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Work` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amountPeople` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `laItude` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longItude` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "amoutPeople",
DROP COLUMN "createAt",
ADD COLUMN     "amountPeople" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "laItude" TEXT NOT NULL,
ADD COLUMN     "longItude" TEXT NOT NULL,
ALTER COLUMN "another" DROP NOT NULL;

-- DropTable
DROP TABLE "Task";

-- DropTable
DROP TABLE "Work";
