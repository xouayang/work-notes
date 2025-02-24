/*
  Warnings:

  - You are about to drop the `Create` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Create";

-- CreateTable
CREATE TABLE "Work" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "taskWork" TEXT NOT NULL,
    "amountPeople" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "kilomet" TEXT NOT NULL,
    "longItude" TEXT NOT NULL,
    "laItude" TEXT NOT NULL,
    "another" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);
