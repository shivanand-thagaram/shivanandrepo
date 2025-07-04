import { IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  director?: string;

  @IsOptional()
  @IsInt()
  release_year?: number;
}
