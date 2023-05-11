import { ObjectId } from 'typeorm';

export interface Team {
  id: number;
  name: string;
  description: string;
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
