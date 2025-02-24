/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "taskWork" TEXT NOT NULL,
    "amoutPeople" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "kilomet" TEXT NOT NULL,
    "another" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
