import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { DrizzleModule } from '../db/drizzlemodule';


@Module({
  imports: [DrizzleModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
