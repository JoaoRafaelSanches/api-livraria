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

let autores = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@gmail.com',
  },
  {
    id: 3,
    nome: 'Pedro Santos',
    email: 'pedro.santos@gmail.com',
  },
];

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
}
