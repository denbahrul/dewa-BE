/*
  Warnings:

  - You are about to drop the `soundsystem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `tentandstage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `satuan` to the `tentandstage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tentandstage" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "satuan" TEXT NOT NULL;

-- DropTable
DROP TABLE "soundsystem";

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tentandstage" ADD CONSTRAINT "tentandstage_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
