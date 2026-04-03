import { int, varchar, mssqlTable } from 'drizzle-orm/mssql-core';

export const autores = mssqlTable('autores', {
  id: int('id').primaryKey().identity(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
});
