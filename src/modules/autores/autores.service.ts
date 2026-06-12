import {
  BadRequestException,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { atualizarAutorDto, CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';
import { autoresTabela } from 'src/db/schemas';

@Injectable()
export class AutoresService {
  constructor(private readonly autoresRepository: AutoresRepository) {}
  async listarAutores() {
    return await this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);

    if (autorEncontrado.length === 0) {
      throw new NotFoundException(`autor com id ${id} não encontrado`);
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutorDto) {
    return this.autoresRepository.criarAutor(bodyRequest);
  }

  async atualizarAutor(idAutor: number, bodyrequest: atualizarAutorDto) {
    await this.listarAutor(idAutor);

    return await this.autoresRepository.atualizarAutor(idAutor, bodyrequest);
  }

  async deletarAutor(idAutor: number) {
    await this.listarAutor(idAutor);

    return await this.autoresRepository.deletarAutor(idAutor);
  }

  async inativarAutor(idAutor: number) {
    await this.listarAutor(idAutor);

    return await this.autoresRepository.inativarAutor(idAutor);
  }
}
