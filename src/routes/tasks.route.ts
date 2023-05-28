import { Router } from 'express';
import { TaskController } from '@controllers/tasks.controller';
import { CreateTask, UpdateTask } from '@dtos/task.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class TaskRoute implements Routes {
  public path = '/tasks';
  public router = Router();
  public task = new TaskController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}`, this.user.getUsers);
    this.router.get(`${this.path}/:id(\\d+)`, this.task.getTasksByUserId);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateTask), this.task.createTask);
    this.router.post(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateTask), this.task.updateTask);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.user.deleteUser);
  }
}
