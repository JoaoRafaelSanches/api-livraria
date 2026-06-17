import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Param,
  Put,
  Delete,
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

  @Get('/listar-livros-com-autor')
  async listarLivrosComAutor() {
    return await this.livrosService.listarLivrosComAutor();
  }

  @Get('/listar-livro-com-autor/:id')
  async listarLivroComAutor(@Param('id', ParseIntPipe) id: number) {
    return await this.livrosService.listarLivroComAutor(id);
  }

  @Put('/atualizar-livro/:id')
  async atualizarLivro(
    @Param('id', ParseIntPipe) id: number,
    @Body() bodyRequest: CriarLivroDto,
  ) {
    return await this.livrosService.atualizarLivro(id, bodyRequest);
  }

  @Delete('/deletar-livro/:id')
  async deletarLivro(@Param('id', ParseIntPipe) id: number) {
    return await this.livrosService.deletarLivro(id);
  }
}
