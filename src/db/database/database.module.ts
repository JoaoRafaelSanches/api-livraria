import { Global } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DRIZZLE } from './database.constants';
import { Module } from '@nestjs/common';
import * as schema from '../schemas';

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: () => {
        return drizzle('', { schema });
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DatabaseModule {}
