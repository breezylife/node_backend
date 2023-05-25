import { Service, Container } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { MySQLService } from '@/services/mysql.service';
import { StatusModel } from '@models/status.model';
import { Repository } from 'typeorm';
import { getNowTimeByTimeZone } from '@/utils/timeHandler';
import { Status } from '@/interfaces/status.interface';

@Service()
export class StatusService {
  private async getRepository() {
    const MySQL = await Container.get(MySQLService);
    return MySQL.AppDataSource.getRepository(StatusModel);
  }

  //   public async findAllStatuss(): Promise<Status[]> {
  //     const userRepository: MongoRepository<UserModel> = this.getRepository();

  //     const users: Status[] = await userRepository.find();
  //     return users;
  //   }

  public async findAllStatus(): Promise<Status[]> {
    const statusRepository: Repository<StatusModel> = await this.getRepository();

    const findStatus: Status[] = await statusRepository.find();
    if (!findStatus) throw new HttpException(409, "User doesn't exist");

    return findStatus;
  }

  public async createStatus(statusData: Status): Promise<Status> {
    const statusRepository: Repository<StatusModel> = await this.getRepository();

    const createStatusData: Status = { ...statusData };
    // const createStatusData: Status = { ...statusData, createDt: getNowTimeByTimeZone(), updateDt: getNowTimeByTimeZone() };
    await statusRepository.save(createStatusData);

    return createStatusData;
  }
}
