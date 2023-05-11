import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Team } from '@interfaces/teams.interface';
import { TeamsService } from '@services/teams.service';

export class TeamController {
  public team = Container.get(TeamsService);

  public getTeams = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: Team[] = await this.team.findAllTeams();

      res.status(200).json({ data: findAllUsersData, message: 'Success' });
    } catch (error) {
      next(error);
    }
  };

  // public getTeamById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const teamId = parseInt(req.params.id);
  //     const findOneUserData: Team = await this.team.findTeamById(teamId);

  //     res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public createTeam = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const teamData: Team = req.body;
      const createTeamData: Team = await this.team.createTeam(teamData);

      res.status(201).json({ data: createTeamData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  //   public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //     try {
  //       const userId = Number(req.params.id);
  //       const userData: User = req.body;
  //       const updateUserData: User[] = await this.user.updateUser(userId, userData);

  //       res.status(200).json({ data: updateUserData, message: 'updated' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //     try {
  //       const userId = Number(req.params.id);
  //       const deleteUserData: User[] = await this.user.deleteUser(userId);

  //       res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
}
