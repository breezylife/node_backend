import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TASKS } from '@config';

@Entity({ name: TASKS })
export class TaskModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  // @OneToMany(type => ProjectModel.id)
  projectId: number;

  @Column({ nullable: true })
  projectName: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  initiator: string;

  @Column()
  status: string;

  @Column()
  assignee: string;

  @Column({ nullable: true })
  parentId: string;

  @Column({ nullable: true })
  parentName: string;

  @Column()
  createDt: Date;

  @Column()
  updateDt: Date;
}
