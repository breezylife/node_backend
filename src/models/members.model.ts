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
  teamName: string;

  @Column()
  description: string;

  @Column()
  createDt: Date;

  @Column()
  updateDt: Date;
}
