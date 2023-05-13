import { Service, Container } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { MySQLService } from '@/services/mysql.service';
import { MemberModel } from '@models/members.model';
import { Repository } from 'typeorm';
import { getNowTimeByTimeZone } from '@/utils/timeHandler';
import { Member } from '@/interfaces/members.interface';

@Service()
export class MembersService {
  private async getRepository() {
    const MySQL = await Container.get(MySQLService);
    return MySQL.AppDataSource.getRepository(MemberModel);
  }

  //   public async findAllMembers(): Promise<Member[]> {
  //     const userRepository: MongoRepository<UserModel> = this.getRepository();

  //     const users: Member[] = await userRepository.find();
  //     return users;
  //   }

  public async findAllMembersByTeamId(teamId: string): Promise<Member[]> {
    const teamRepository: Repository<MemberModel> = await this.getRepository();

    const findMembers: Member[] = await teamRepository.findBy({ teamId: parseInt(teamId) });
    // if (!findMember) throw new HttpException(409, "User doesn't exist");

    return findMembers;
  }

  public async createMember(teamData: Member): Promise<Member> {
    const teamRepository: Repository<MemberModel> = await this.getRepository();

    const createMemberData: Member = { ...teamData, createDt: getNowTimeByTimeZone(), updateDt: getNowTimeByTimeZone() };
    await teamRepository.save(createMemberData);

    return createMemberData;
  }

  // public async updateMember(teamData: Member): Promise<Member> {
  //   const teamRepository: Repository<MemberModel> = await this.getRepository();

  //   const updateMemberData: Member = { ...teamData, updateDt: getNowTimeByTimeZone() };
  //   await teamRepository.save(updateMemberData);

  //   return updateMemberData;
  // }
}
