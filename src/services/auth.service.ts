import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Service, Container } from 'typedi';
import { SECRET_KEY } from '@config';
import { HttpException } from '@exceptions/httpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import { UserModel } from '@models/users.model';
import { getNowTimeByTimeZone } from '@/utils/timeHandler';
import { UserService } from '@services/users.service';

const createToken = (user: User): TokenData => {
  const dataStoredInToken: DataStoredInToken = {
    id: user.id,
    username: user.username,
    role: user.role,
    createDt: user.createDt,
    updateDt: user.updateDt,
  };
  const expiresIn: number = 60 * 60;

  return { expiresIn, token: sign(dataStoredInToken, SECRET_KEY, { expiresIn }) };
};

const createCookie = (tokenData: TokenData): string => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
};

@Service()
export class AuthService {
  private UserService = Container.get(UserService);

  public async signup(userData: User): Promise<User> {
    return this.UserService.createUser(userData);
  }

  public async login(userData: User): Promise<{ cookie: string; findUser: User }> {
    const findUser = await this.UserService.findUserByEmail(userData.email);
    if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    const tokenData = createToken(findUser);
    const cookie = createCookie(tokenData);

    return { cookie, findUser };
  }

  public async logout(userData: User): Promise<User> {
    return this.UserService.findUserByEmail(userData.email);
  }
}
