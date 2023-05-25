import { Service, Container } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { MySQLService } from '@/services/mysql.service';
import { TeamModel } from '@models/teams.model';
import { Repository } from 'typeorm';
import { getNowTimeByTimeZone } from '@/utils/timeHandler';
import { Team } from '@/interfaces/teams.interface';

@Service()
export class TeamsService {
  private async getRepository() {
    const MySQL = await Container.get(MySQLService);
    return MySQL.AppDataSource.getRepository(TeamModel);
  }

  //   public async findAllTeams(): Promise<Team[]> {
  //     const userRepository: MongoRepository<UserModel> = this.getRepository();

  //     const users: Team[] = await userRepository.find();
  //     return users;
  //   }

  public async findAllTeams(): Promise<Team[]> {
    const teamRepository: Repository<TeamModel> = await this.getRepository();

    const findTeams: Team[] = await teamRepository.find();
    // if (!findTeam) throw new HttpException(409, "User doesn't exist");

    return findTeams;
  }

  public async createTeam(teamData: Team): Promise<Team> {
    const teamRepository: Repository<TeamModel> = await this.getRepository();

    const createTeamData: Team = { ...teamData };
    // const createTeamData: Team = { ...teamData, createDt: getNowTimeByTimeZone(), updateDt: getNowTimeByTimeZone() };
    await teamRepository.save(createTeamData);

    return createTeamData;
  }

  // public async updateTeam(teamData: Team): Promise<Team> {
  //   const teamRepository: Repository<TeamModel> = await this.getRepository();

  //   const updateTeamData: Team = { ...teamData, updateDt: getNowTimeByTimeZone() };
  //   await teamRepository.save(updateTeamData);

  //   return updateTeamData;
  // }
}
