import { Injectable, NotFoundException } from '@nestjs/common';
import { movies } from '../db/schema';
import { db } from '../db/drizzleprovider';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { eq, asc } from 'drizzle-orm';


@Injectable()
export class MoviesService {
 async create(dto: CreateMovieDto): Promise<any> {
    const created = await db.insert(movies).values({
      title: dto.title,
      director: dto.director,
      release_year: dto.release_year,
    }).returning();
    
    return created[0];
  }


  async findAll(): Promise<any[]> {
    const result = await db.select().from(movies).orderBy(asc(movies.id)); 
    return result;
  }

  async findOne(id: number): Promise<any> {
    const result = await db.select().from(movies).where(eq(movies.id, id)).limit(1);
    if (!result.length) throw new NotFoundException(`Movie with ID ${id} not found`);
    return result[0];
  }

  async update(id: number, dto: UpdateMovieDto): Promise<any> {
    const result = await db.update(movies).set(dto).where(eq(movies.id, id)).returning();
    if (!result.length) throw new NotFoundException(`Movie with ID ${id} not found`);
    return result[0];
  }

  async delete(id: number): Promise<any> {
    const result = await db.delete(movies).where(eq(movies.id, id)).returning();
    if (!result.length) throw new NotFoundException(`Movie with ID ${id} not found`);
    return result[0];
  }
}

