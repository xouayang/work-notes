-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "taskwork" TEXT NOT NULL,
    "amountPeople" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "kilomet" TEXT NOT NULL,
    "another" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
