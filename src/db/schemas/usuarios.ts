import {
  int,
  varchar,
  mssqlTable,
  datetime,
  bit,
} from 'drizzle-orm/mssql-core';

export const UsuariosTabela = mssqlTable('autores', {
  id: int('id').primaryKey().identity(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHashed: varchar('password_hashed', { length: 225 }).notNull(),
  ativo: bit('ativo').notNull().default(true),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});

export type Autor = typeof UsuariosTabela.$inferSelect;
export type CriarAutor = typeof UsuariosTabela.$inferInsert;
