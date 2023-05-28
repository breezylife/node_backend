import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTask {
  @IsOptional()
  public projectId: number;

  @IsOptional()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public initiator: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsOptional()
  public assignee: string;

  @IsOptional()
  public startDate: string;

  @IsOptional()
  public dueDate: string;

  @IsOptional()
  public content: string;

  @IsOptional()
  public boardId: number;

  @IsOptional()
  public parentId: number;
}

export class UpdateTask {
  @IsOptional()
  public projectId: number;

  @IsOptional()
  public title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsOptional()
  public assignee: string;

  @IsOptional()
  public startDate: string;

  @IsOptional()
  public dueDate: string;

  @IsOptional()
  public content: string;

  @IsOptional()
  public boardId: number;

  @IsOptional()
  public parentId: number;
}
