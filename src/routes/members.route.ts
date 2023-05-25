import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { MemberController } from '@controllers/members.controller';
import { CreateMemberDto } from '@dtos/members.dto';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class MemberRoute implements Routes {
  public router = Router();
  public team = new MemberController();
  public path = '/members';

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.team.getAllMembers);
    this.router.get(`${this.path}/:id(\\d+)`, this.team.getMembersByTeamId);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateMemberDto), this.team.createMember);
  }
}
