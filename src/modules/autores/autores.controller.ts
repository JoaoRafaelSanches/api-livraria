import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CriarAutorDto } from './autores.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores')
  async listarAutores() {
    return await this.autoresService.listarAutores();
  }

  @Get('/listar-autor/:id')
  async listarAutor(@Param('id', ParseIntPipe) id: number) {
    return await this.autoresService.listarAutor(id);
  }

  @Post('/criar-autor')
  async criarAutor(@Body() bodyrequest: CriarAutorDto) {
    return await this.autoresService.criarAutor(bodyrequest);
  }

  @Put('/atualizar-autor/:id')
  async atualizarAutor(
    @Param('id', ParseIntPipe) idAutor: number,
    @Body() bodyrequest: any,
  ) {
    return await this.autoresService.atualizarAutor(idAutor, bodyrequest);
  }

  @Delete('/deletar-autor/:id')
  async deletarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    return await this.autoresService.deletarAutor(idAutor);
  }

  @Put('/inativar-autor/:id')
  async inativarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    return await this.autoresService.inativarAutor(idAutor);
  }
}
