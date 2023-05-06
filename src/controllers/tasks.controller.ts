import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Task } from '@interfaces/task.interface';
import { TasksService } from '@services/tasks.service';

export class TaskController {
  public task = Container.get(TasksService);

  //   public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //     try {
  //       const findAllUsersData: User[] = await this.user.findAllUser();

  //       res.status(200).json({ data: findAllUsersData, message: 'findAll' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  public getTaskById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const taskId = parseInt(req.params.id);
      const findOneUserData: Task = await this.task.findTaskById(taskId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const taskData: Task = req.body;
      const createTaskData: Task = await this.task.createTask(taskData);

      res.status(201).json({ data: createTaskData, message: 'created' });
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
