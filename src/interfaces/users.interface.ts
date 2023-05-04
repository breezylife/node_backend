import { ObjectId } from 'typeorm';

export interface User {
  id: ObjectId;
  email: string;
  password: string;
  username: string;
  role: string;
  createDt: string;
  updateDt: string;
}
