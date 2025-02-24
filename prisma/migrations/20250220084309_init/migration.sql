-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "taskWork" TEXT NOT NULL,
    "amoutPeople" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "kilomet" TEXT NOT NULL,
    "another" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
