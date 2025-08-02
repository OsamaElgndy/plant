/*
  Warnings:

  - The primary key for the `Plant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Plant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `CareLog` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('INDOOR', 'OUTDOOR', 'SUCCULENT', 'HERB', 'OTHER');

-- DropForeignKey
ALTER TABLE "public"."CareLog" DROP CONSTRAINT "CareLog_plantId_fkey";

-- AlterTable
ALTER TABLE "public"."Plant" DROP CONSTRAINT "Plant_pkey",
ADD COLUMN     "category" "public"."Category" NOT NULL DEFAULT 'OTHER',
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Plant_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "public"."CareLog";

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Favorite" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "plantId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "public"."User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_plantId_key" ON "public"."Favorite"("userId", "plantId");

-- AddForeignKey
ALTER TABLE "public"."Plant" ADD CONSTRAINT "Plant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorite" ADD CONSTRAINT "Favorite_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "public"."Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
