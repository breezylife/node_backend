import { DataSource } from 'typeorm';
import { CONNECTION_URL, DATABASE } from '@config';
import { Service } from 'typedi';
import { UserModel } from '@/models/users.model';

@Service()
export class MongoDBServie {
  public AppDataSource: DataSource;

  public connectToMongoDB() {
    this.AppDataSource = new DataSource({
      type: 'mongodb',
      url: CONNECTION_URL,
      database: DATABASE,
      entities: [UserModel],
    });
    this.AppDataSource.initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch(err => {
        console.error('Error during Data Source initialization', err);
      });
  }
}
