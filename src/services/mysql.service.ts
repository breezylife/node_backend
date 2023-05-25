import { DataSource } from 'typeorm';
import { DATABASE } from '@config';
import { Service } from 'typedi';
import { UserModel } from '@/models/users.model';
import { TaskModel } from '@/models/tasks.model';
import { TeamModel } from '@/models/teams.model';
import { MemberModel } from '@/models/members.model';
import { StatusModel } from '@/models/status.model';

@Service()
export class MySQLService {
  public AppDataSource: DataSource;

  public async connectToMySQL() {
    try {
      this.AppDataSource = await new DataSource({
        type: 'postgres',
        host: 'dpg-chnms27dvk4n43aj1m60-a.singapore-postgres.render.com',
        port: 5432,
        username: 'root',
        password: 'Tt6m8GfxMIsfJSCmxQaTPOzRKcpkJGYM',
        database: DATABASE,
        entities: [UserModel, TaskModel, TeamModel, MemberModel, StatusModel],
        synchronize: true,
        ssl: true,
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
