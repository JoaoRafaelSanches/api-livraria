import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import { UsuariosTabela } from 'src/db/schemas/usuarios';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { CriarUsuarioDTO } from './usuarios.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsuariosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async CriarUsuario(usuario: CriarUsuarioDTO) {
    try {
      await this.db.insert(UsuariosTabela).values({
        nome: usuario.nome,
        email: usuario.email,
        passwordHashed: usuario.password,
      });

      return usuario;
    } catch (error) {
      throw new InternalServerErrorException('erro ao criar usuario');
    }
  }

  async BuscarUsuarioPorEmail(email: string) {
    try {
      const usuarioEncontrado = await this.db
        .select()
        .from(UsuariosTabela)
        .where(eq(UsuariosTabela.email, email));
      return usuarioEncontrado[0] ?? null;
    } catch (error) {
      throw new InternalServerErrorException(
        'erro ao buscar usuario por email',
      );
    }
  }
}
