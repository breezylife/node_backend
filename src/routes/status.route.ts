import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { StatusController } from '@controllers/status.controller';
import { CreateStatusDto } from '@dtos/status.dto';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class StatusRoute implements Routes {
  public router = Router();
  public status = new StatusController();
  public path = '/status';

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.status.getStatus);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateStatusDto), this.status.createStatus);
  }
}
