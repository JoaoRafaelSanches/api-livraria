import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { AutoresRepository } from './autores.repository';
import { DatabaseModule } from 'src/db/database/database.module';

@Module({
  controllers: [AutoresController, DatabaseModule],
  providers: [AutoresService, AutoresRepository],
  exports: [AutoresService],
})
export class AutoresModule {}
