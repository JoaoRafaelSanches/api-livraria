import { DRIZZLE } from 'src/db/database/database.constants';
import { livrosTabela } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { LivrosController } from './livros.controller';
import { LivrosRepository } from './livros.service';
import { LivrosService } from './livros.repository';
import { Module } from '@nestjs/common';

@Module({
  controllers: [LivrosController],
  providers: [LivrosService, LivrosRepository],
  exports: [],
})
export class LivrosModule {}
