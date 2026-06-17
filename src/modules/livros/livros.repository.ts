import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import { autoresTabela, livrosTabela } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { CriarLivroDto } from './livros.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class LivrosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarLivros() {
    try {
      const livros = await this.db.select().from(livrosTabela);

      return livros;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar livros');
    }
  }

  async criarLivro(bodyRequest: CriarLivroDto) {
    try {
      await this.db.insert(livrosTabela).values({
        idAutor: bodyRequest.id_autor,
        titulo: bodyRequest.titulo,
        descricao: bodyRequest.descricao,
      });

      return `Livro ${bodyRequest.titulo} criado com sucesso`;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar livro');
    }
  }

  async listarLivro(id: number) {
    try {
      const livroEncontrado = await this.db
        .select()
        .from(livrosTabela)
        .where(eq(livrosTabela.id, id));

      return livroEncontrado[0];
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar um livro');
    }
  }

  async listarLivrosComAutor() {
    try {
      const LivrosComAutor = await this.db
        .select()
        .from(livrosTabela)
        .innerJoin(autoresTabela, eq(livrosTabela.idAutor, autoresTabela.id));

      return LivrosComAutor;
    } catch (error) {
      throw new InternalServerErrorException('erro ao listar livro com autor');
    }
  }
  async listarLivroComAutor(id: number) {
    try {
      const LivroComAutor = await this.db
        .select()
        .from(livrosTabela)
        .innerJoin(autoresTabela, eq(livrosTabela.idAutor, autoresTabela.id))
        .where(eq(livrosTabela.id, id));

      return LivroComAutor[0];
    } catch (error) {
      throw new InternalServerErrorException('erro ao listar livro com autor');
    }
  }

  async atualizarLivro(id: number, bodyRequest: CriarLivroDto) {
    try {
      await this.db
        .update(livrosTabela)
        .set(bodyRequest)
        .where(eq(livrosTabela.id, id));
    } catch (error) {
      throw new InternalServerErrorException('erro ao atualizar livro');
    }
  }

  async deletarLivro(id: number) {
    try {
      await this.db.delete(livrosTabela).where(eq(livrosTabela.id, id));

      return { message: `Livro de id ${id} deletado com sucesso` };
    } catch (error) {
      throw new InternalServerErrorException('erro ao deletar livro');
    }
  }
}
