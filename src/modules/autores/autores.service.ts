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

  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);

    if (!autorEncontrado) {
      throw new NotFoundException('Autor não encontrado.');
    }
    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutorDto) {
    if (!bodyRequest.nome || !bodyRequest.email) {
      return 'Nome e email são obrigatórios';
    }
    autores.push({
      id: autores.length + 1,
      nome: bodyRequest.nome,
      email: bodyRequest.email,
    });
  }

  atualizarAutor(idAutor: number, bodyrequest: atualizarAutorDto) {
    const autorEncontrado = this.listarAutor(idAutor);

    if (!autorEncontrado) {
      return 'Autor não encontrado.';
    }

    if (bodyrequest.nome && !bodyrequest.email) {
      throw new BadRequestException('nome e email são obrigatorios!');
    }

    if (bodyrequest.nome) {
      autorEncontrado.nome = bodyrequest.nome;
    }

    if (bodyrequest.email) {
      autorEncontrado.email = bodyrequest.email;
    }

    return autorEncontrado;
  }

  deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
}
