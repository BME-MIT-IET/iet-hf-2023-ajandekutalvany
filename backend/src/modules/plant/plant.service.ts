import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/PrismaService';
import { PlantInput } from '../../graphql/graphqlTypes';

@Injectable()
export class PlantService {
  constructor(private readonly prismaService: PrismaService) {}
  plants() {
    return this.prismaService.plant.findMany();
  }

  getPlantById(id: string) {
    return this.prismaService.plant.findUnique({
      where: {
        id,
      },
    });
  }

  async addPlant(plant: PlantInput) {
    const newPlant = await this.prismaService.plant.create({
      data: {
        name: plant.name,
        waterFrequency: plant.waterFrequency,
      },
    });

    return {
      typename: 'Plant',
      ...newPlant,
    };
  }

  async getPlantLastWatered(id: string) {
    return (
      await this.prismaService.plant
        .findUnique({
          where: {
            id,
          },
        })
        .watering({
          orderBy: {
            timestamp: 'desc',
          },
          take: 1,
        })
    )[0]?.timestamp;
  }

  async waterPlant(id: string) {
    await this.prismaService.watering.create({
      data: {
        plant: {
          connect: {
            id,
          },
        },
      },
    });
    return true;
  }

  removePlant(id: string) {
    return this.prismaService.plant.delete({
      where: {
        id,
      },
    });
  }

  editPlant(id: string, plant: PlantInput) {
    return this.prismaService.plant.update({
      where: {
        id,
      },
      data: {
        name: plant.name,
        waterFrequency: plant.waterFrequency,
      },
    });
  }

  removeAllPlants() {
    this.prismaService.plant.deleteMany();
    return true;
  }
}
