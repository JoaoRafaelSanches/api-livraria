import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Param,
} from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CriarAutorDto } from '../autores/autores.dto';
import { CriarLivroDto } from './livros.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get('/listar-livros')
  async listarLivros() {
    return await this.livrosService.listarLivros();
  }

  @Post('/criar-livro')
  async criarLivro(@Body() bodyrequest: CriarLivroDto) {
    return await this.livrosService.criarLivro(bodyrequest);
  }

  @Get('/listar-livro/:id')
  async listarLivro(@Param('id', ParseIntPipe) id: number) {
    return await this.livrosService.listarLivro(id);
  }
}
