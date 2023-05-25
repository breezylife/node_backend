import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from '@config';

@Entity({ name: Status })
export class StatusModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  description: string;

  @Column()
  createDt: string;

  @Column()
  updateDt: string;
}
