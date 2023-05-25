import { hash } from 'bcrypt';
import { Service, Container } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { User } from '@interfaces/users.interface';
import { MySQLService } from '@services/mysql.service';
import { UserModel } from '@models/users.model';
import { Repository } from 'typeorm';
import { getNowTimeByTimeZone } from '@/utils/timeHandler';

@Service()
export class UserService {
  private async getRepository() {
    const MySQL = await Container.get(MySQLService);
    return MySQL.AppDataSource.getRepository(UserModel);
  }

  public async findAllUsers(): Promise<User[]> {
    const userRepository: Repository<UserModel> = await this.getRepository();

    const users: User[] = await userRepository.find();
    return users;
  }

  public async findUserByEmail(email: string): Promise<User> {
    const userRepository: Repository<UserModel> = await this.getRepository();

    const findUser: User = await userRepository.findOneBy({ email });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: User): Promise<User> {
    const userRepository: Repository<UserModel> = await this.getRepository();

    const findUser: User = await userRepository.findOneBy({ email: userData.email });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = { ...userData, password: hashedPassword };
    // const createUserData: User = { ...userData, password: hashedPassword, createDt: getNowTimeByTimeZone(), updateDt: getNowTimeByTimeZone() };
    await userRepository.save(createUserData);

    return createUserData;
  }

  public async updateUser(userData: User): Promise<User> {
    const userRepository: Repository<UserModel> = await this.getRepository();

    const findUser: User = await this.findUserByEmail(userData.email);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    const newUserInfo = { ...findUser, ...userData, password: hashedPassword, updateDt: getNowTimeByTimeZone() };
    await userRepository.save(newUserInfo);

    return newUserInfo;
  }

  // public async deleteUser(userId: number): Promise<User[]> {
  //   const findUser: User = UserModel.find(user => user.id === userId);
  //   if (!findUser) throw new HttpException(409, "User doesn't exist");

  //   const deleteUserData: User[] = UserModel.filter(user => user.id !== findUser.id);
  //   return deleteUserData;
  // }
}
