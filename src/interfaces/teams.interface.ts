import { ObjectId } from 'typeorm';

export interface Team {
  id: number;
  name: string;
  description: string;
  createDt: Date;
  updateDt: Date;
}
