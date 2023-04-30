import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantResolver } from './plant.resolver';
import {PrismaService} from "../../prisma/PrismaService";

@Module({
  providers: [PlantService, PlantResolver, PrismaService]
})
export class PlantModule {}
