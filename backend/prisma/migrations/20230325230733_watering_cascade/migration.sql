-- DropForeignKey
ALTER TABLE "Watering" DROP CONSTRAINT "Watering_plantId_fkey";

-- AlterTable
ALTER TABLE "Watering" ALTER COLUMN "timestamp" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Watering" ADD CONSTRAINT "Watering_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
