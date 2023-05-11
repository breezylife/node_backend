import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Teams } from '@config';

@Entity({ name: Teams })
export class TeamModel {
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
