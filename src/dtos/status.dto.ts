import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateStatusDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  public description: string;
}
