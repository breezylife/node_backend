import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Status } from '@interfaces/status.interface';
import { StatusService } from '@services/status.service';

export class StatusController {
  public team = Container.get(StatusService);

  public getStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: Status[] = await this.team.findAllStatus();

      res.status(200).json({ data: findAllUsersData, message: 'Success' });
    } catch (error) {
      next(error);
    }
  };

  // public getStatusById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const teamId = parseInt(req.params.id);
  //     const findOneUserData: Status = await this.team.findStatusById(teamId);

  //     res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public createStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const teamData: Status = req.body;
      const createStatusData: Status = await this.team.createStatus(teamData);

      res.status(201).json({ data: createStatusData, message: 'created' });
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
