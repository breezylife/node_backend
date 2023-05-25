import { Service, Container } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { MySQLService } from '@/services/mysql.service';
import { TaskModel } from '@models/tasks.model';
import { Repository } from 'typeorm';
import { getNowTimeByTimeZone } from '@/utils/timeHandler';
import { Task } from '@/interfaces/tasks.interface';

@Service()
export class TasksService {
  private async getRepository() {
    const MySQL = await Container.get(MySQLService);
    return MySQL.AppDataSource.getRepository(TaskModel);
  }

  //   public async findAllUsers(): Promise<Task[]> {
  //     const userRepository: MongoRepository<UserModel> = this.getRepository();

  //     const users: Task[] = await userRepository.find();
  //     return users;
  //   }

  public async findTaskById(id: number): Promise<Task> {
    const taskRepository: Repository<TaskModel> = await this.getRepository();

    const findTask: Task = await taskRepository.findOneBy({ id });
    // if (!findTask) throw new HttpException(409, "User doesn't exist");

    return findTask;
  }

  public async createTask(taskData: Task): Promise<Task> {
    const taskRepository: Repository<TaskModel> = await this.getRepository();

    // const parentId = taskData.parentId;
    // if (parentId) {
    //   const findTask: Task = await taskRepository.findOneBy({ parentId });
    //   const createSubTaskData: Task = {
    //     ...findTask,
    //     subTasks: [...findTask.subTasks, { ...taskData, createDt: getNowTimeByTimeZone(), updateDt: getNowTimeByTimeZone() }],
    //   };
    //   await taskRepository.save(createSubTaskData);
    //   return createSubTaskData;
    // }

    const createTaskData: Task = { ...taskData };
    // const createTaskData: Task = { ...taskData, createDt: getNowTimeByTimeZone(), updateDt: getNowTimeByTimeZone() };
    await taskRepository.save(createTaskData);

    return createTaskData;
  }

  public async updateTask(taskData: Task): Promise<Task> {
    const taskRepository: Repository<TaskModel> = await this.getRepository();

    const updateTaskData: Task = { ...taskData };
    // const updateTaskData: Task = { ...taskData, updateDt: getNowTimeByTimeZone() };
    await taskRepository.save(updateTaskData);

    return updateTaskData;
  }
}
