import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { USERS } from '@config';

@Entity({ name: USERS })
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  createDt: string;

  @Column()
  updateDt: string;
}
