import { ObjectId } from 'typeorm';

export interface Task {
  id: number;
  projectName: string;
  title: string;
  description: string;
  initiator: string;
  status: string;
  assignee: string;
  parentId: string;
  createDt: string;
  updateDt: string;
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
//   createDt: string;
//   updateDt: string;
// }
