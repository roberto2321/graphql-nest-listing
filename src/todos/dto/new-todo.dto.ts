import { IsString, IsBoolean } from 'class-validator';

export class RegisterTodoDto {
  @IsString()
  title: string;

  @IsBoolean()
  done: boolean;
}
