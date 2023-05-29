import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PlantService } from './plant.service';
import { Plant, PlantInput } from '../../graphql/graphqlTypes';

@Resolver('Plant')
export class PlantResolver {
  constructor(private readonly plantService: PlantService) {}

  @Query('plants')
  queryPlants() {
    return this.plantService.plants();
  }

  @Query('plant')
  queryPlant(@Args('id') id: string) {
    return this.plantService.getPlantById(id);
  }

  @ResolveField('lastWatered')
  resolveLastWatered(@Parent() plant: Plant) {
    return this.plantService.getPlantLastWatered(plant.id);
  }

  @Mutation('addPlant')
  addPlant(@Args('plant') plant: PlantInput) {
    return this.plantService.addPlant(plant);
  }

  @Mutation('waterPlant')
  async waterPlant(@Args('id') id: string) {
    return this.plantService.waterPlant(id);
  }

  @Mutation('removePlant')
  async removePlant(@Args('id') id: string) {
    return this.plantService.removePlant(id);
  }

  @Mutation('removeAllPlants')
  async removeAllPlants() {
    return this.plantService.removeAllPlants();
  }

  @Mutation('editPlant')
  async editPlant(@Args('id') id: string, @Args('plant') plant: PlantInput) {
    return this.plantService.editPlant(id, plant);
  }
}
