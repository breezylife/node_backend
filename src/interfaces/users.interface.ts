import { ObjectId } from 'typeorm';

export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  createDt: string;
  updateDt: string;
}
