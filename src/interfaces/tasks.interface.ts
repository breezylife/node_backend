import { ObjectId } from 'typeorm';

export interface Task {
  id: number;
  projectId?: number;
  title: string;
  initiator: number;
  startDate?: string;
  dueDate?: string;
  status?: string;
  parentId?: string;
  boardId?: string;
  content: string;
  // createDt: Date;
  // updateDt: Date;
}

// export interface SubTask {
//   id: string;
//   title: string;
//   description: string;
//   initiator: string;
//   status: string;
//   assignee: string;
//   parentId: string;
//   subTasks: Array<SubTask>;
//   createDt: Date;
//   updateDt: Date;
// }
