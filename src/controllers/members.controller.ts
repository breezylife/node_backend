import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Member } from '@interfaces/members.interface';
import { MembersService } from '@services/members.service';

export class MemberController {
  public team = Container.get(MembersService);

  public getMembers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const teamId = req.params.id;
      const findAllUsersData: Member[] = await this.team.findAllMembersByTeamId(teamId);

      res.status(200).json({ data: findAllUsersData, message: 'Success' });
    } catch (error) {
      next(error);
    }
  };

  // public getMemberById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const teamId = parseInt(req.params.id);
  //     const findOneUserData: Member = await this.team.findMemberById(teamId);

  //     res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public createMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const teamData: Member = req.body;
      const createMemberData: Member = await this.team.createMember(teamData);

      res.status(201).json({ data: createMemberData, message: 'created' });
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
