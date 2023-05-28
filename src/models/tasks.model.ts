import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TASKS } from '@config';

@Entity({ name: TASKS })
export class TaskModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  // @OneToMany(type => ProjectModel.id)
  projectId: number;

  @Column()
  title: string;

  @Column()
  initiator: string;

  @Column({ nullable: true })
  startDate: string;

  @Column({ nullable: true })
  dueDate: string;

  @Column({ nullable: true })
  status: string;

  // @Column()
  // assignee: string;

  @Column({ nullable: true })
  parentId: string;

  @Column({ nullable: true })
  boardId: string;

  @Column({ nullable: true })
  content: string;
  // @Column()
  // createDt: Date;

  // @Column()
  // updateDt: Date;
}
