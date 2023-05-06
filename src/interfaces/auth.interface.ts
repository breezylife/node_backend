import { Request } from 'express';
import { User } from '@interfaces/users.interface';
import { ObjectId } from 'typeorm';

export interface DataStoredInToken {
  id: number;
  username: string;
  createDt: string;
  updateDt: string;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: User;
}
