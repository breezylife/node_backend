import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity({ name: 'users' })
export class UserModel {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  role: string;

  @Column()
  password: string;

  @Column()
  createDt: string;

  @Column()
  updateDt: string;
}
