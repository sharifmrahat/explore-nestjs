import { IsString } from 'class-validator';

export class createDto {
  @IsString()
  data: string;
}
