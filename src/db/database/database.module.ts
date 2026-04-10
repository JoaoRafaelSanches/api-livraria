import { Global } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DRIZZLE } from './database.constants';
import { Module } from '@nestjs/common';
import * as schema from '../schemas';
import { DATABASE_URL } from './database.constants';

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: () => {
        return drizzle(DATABASE_URL, { schema });
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DatabaseModule {}
