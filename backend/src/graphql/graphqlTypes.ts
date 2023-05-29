
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface PlantInput {
    name: string;
    waterFrequency: number;
}

export interface IQuery {
    plants(): Plant[] | Promise<Plant[]>;
    plant(id?: Nullable<string>): Nullable<Plant> | Promise<Nullable<Plant>>;
}

export interface IMutation {
    addPlant(plant?: Nullable<PlantInput>): Plant | Promise<Plant>;
    waterPlant(id?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
    removePlant(id?: Nullable<string>): Plant | Promise<Plant>;
    removeAllPlants(): Nullable<boolean> | Promise<Nullable<boolean>>;
    editPlant(id?: Nullable<string>, plant?: Nullable<PlantInput>): Plant | Promise<Plant>;
}

export interface Plant {
    id: string;
    name: string;
    lastWatered?: Nullable<DateTime>;
    waterFrequency: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
