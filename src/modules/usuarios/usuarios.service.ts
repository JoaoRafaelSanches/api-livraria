import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsuariosRepository } from './usuarios.repository';
import { CriarUsuarioDTO } from './usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  async buscarUsuarioPorEmail(email: string) {
    return await this.usuariosRepository.BuscarUsuarioPorEmail(email);
  }

  async CriarUsuario(usuario: CriarUsuarioDTO) {
    const usuarioEncontrado = await this.buscarUsuarioPorEmail(usuario.email);
    if (usuarioEncontrado) {
      throw new ConflictException('usuario ja cadastrado com esse email');
    }
    const passwordHashed = await bcrypt.hash(usuario.password, 10);

    return await this.usuariosRepository.CriarUsuario({
      nome: usuario.nome,
      email: usuario.email,
      password: passwordHashed,
    });
  }
}
