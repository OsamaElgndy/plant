-- CreateEnum
CREATE TYPE "public"."StatusPuy" AS ENUM ('CONFIRMATION', 'REQUEST', 'RECEIVE');

-- AlterTable
ALTER TABLE "public"."Plant" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "statusPuy" "public"."StatusPuy" NOT NULL DEFAULT 'CONFIRMATION';

-- CreateTable
CREATE TABLE "public"."Favorite" (
    "userId" INTEGER NOT NULL,
    "plantId" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("userId","plantId")
);

-- AddForeignKey
ALTER TABLE "public"."Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorite" ADD CONSTRAINT "Favorite_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "public"."Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
