import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { TeamController } from '@controllers/teams.controller';
import { CreateTeamDto } from '@dtos/teams.dto';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class TeamRoute implements Routes {
  public router = Router();
  public team = new TeamController();
  public path = '/teams';

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.team.getTeams);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateTeamDto), this.team.createTeam);
  }
}
