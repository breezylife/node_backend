import { ObjectId } from 'typeorm';

export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  // createDt: Date;
  // updateDt: Date;
}
