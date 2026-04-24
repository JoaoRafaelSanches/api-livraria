import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { atualizarAutorDto, CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';

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

  // atualizarAutor(idAutor: number, bodyrequest: atualizarAutorDto) {
  //   const autorEncontrado = this.listarAutor(idAutor);

  //    if (!autorEncontrado) {
  //     return 'Autor não encontrado.';
  //   }

  //   if (bodyrequest.nome && !bodyrequest.email) {
  //     throw new BadRequestException('nome e email são obrigatorios!');
  //   }

  //   if (bodyrequest.nome) {
  //     autorEncontrado.nome = bodyrequest.nome;
  //   }

  //   if (bodyrequest.email) {
  //     autorEncontrado.email = bodyrequest.email;
  //   }

  //   return autorEncontrado;
  // }

  deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
}
