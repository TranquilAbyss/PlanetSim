import { EntitySchema } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';

export interface Planet extends BaseEntity {
  x: number;
  y: number;
  z: number;
  population: number;
}

export const schema = new EntitySchema<Planet, BaseEntity>({
  name: 'Planet',
  extends: 'BaseEntity',
  properties: {
    x: { type: 'number' },
    y: { type: 'number' },
    z: { type: 'number'},
    population: { type: 'number' },
  },
});

exports.planetSchema = schema;
