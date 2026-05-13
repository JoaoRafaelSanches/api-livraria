import {
  int,
  varchar,
  mssqlTable,
  datetime,
  text,
} from 'drizzle-orm/mssql-core';
import { autoresTabela } from './autores';

export const livrosTabela = mssqlTable('livros', {
  id: int('id').primaryKey().identity(),
  idAutor: int('idAutor')
    .notNull()
    .references(() => autoresTabela.id),
  titulo: varchar('nome', { length: 100 }).notNull(),
  descricao: text('descricao').notNull(),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});

export type Livro = typeof livrosTabela.$inferInsert;
export type CriarLivro = typeof livrosTabela.$inferInsert;
