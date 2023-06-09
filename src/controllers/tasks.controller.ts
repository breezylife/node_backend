import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Task } from '@/interfaces/tasks.interface';
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

  public getTasksByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = parseInt(req.params.id);
      const findTasksData: Task[] = await this.task.findAllTaskByUserId(userId);

      res.status(200).json({ data: findTasksData, message: 'find' });
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

  public updateTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const taskId = Number(req.params.id);
      const taskData: Task = req.body;
      const updateTaskData: Task = await this.task.updateTask(taskId, taskData);

      res.status(200).json({ data: updateTaskData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

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
