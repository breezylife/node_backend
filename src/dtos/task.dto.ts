import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsDate, IsArray, IsNumber, IsOptional } from 'class-validator';
import { Task } from '@/interfaces/tasks.interface';

export class CreateTask {
  @IsOptional()
  public projectId: number;

  @IsOptional()
  public projectName: string;

  @IsOptional()
  public title: string;

  @IsOptional()
  public description: string;

  @IsString()
  @IsNotEmpty()
  public initiator: string;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsOptional()
  public assignee: string;

  @IsOptional()
  public parentId: number;
}
