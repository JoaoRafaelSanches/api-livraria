import { Module } from '@nestjs/common';
import { AutoresModule } from './modules/autores/autores.module';
import { DatabaseModule } from './db/database/database.module';
import { LivrosModule } from './modules/livros/livros.module';

@Module({
  imports: [AutoresModule, DatabaseModule, LivrosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
