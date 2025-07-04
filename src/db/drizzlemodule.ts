import { Module } from '@nestjs/common';
import { db } from './drizzleprovider';

@Module({
  providers: [
    {
      provide: 'DRIZZLE_DB',
      useValue: db,
    },
  ],
  exports: ['DRIZZLE_DB'],
})
export class DrizzleModule {}