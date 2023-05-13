import { DataSource } from 'typeorm';
import { DATABASE } from '@config';
import { Service } from 'typedi';
import { UserModel } from '@/models/users.model';
import { TaskModel } from '@/models/tasks.model';
import { TeamModel } from '@/models/teams.model';
import { MemberModel } from '@/models/members.model';

@Service()
export class MySQLService {
  public AppDataSource: DataSource;

  public async connectToMySQL() {
    try {
      this.AppDataSource = await new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: DATABASE,
        entities: [UserModel, TaskModel, TeamModel, MemberModel],
        synchronize: true,
      });
      this.AppDataSource.initialize()
        .then(() => {
          console.log('Data Source has been initialized!');
        })
        .catch(err => {
          console.error('Error during Data Source initialization', err);
        });
    } catch (error) {
      console.warn(error);
    }
  }
}
