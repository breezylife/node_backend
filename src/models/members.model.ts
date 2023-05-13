import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Members } from '@config';

@Entity({ name: Members })
export class MemberModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  teamId: number;

  @Column()
  description: string;

  @Column()
  createDt: string;

  @Column()
  updateDt: string;
}
