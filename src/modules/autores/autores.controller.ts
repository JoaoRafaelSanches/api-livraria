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
  listarAutores() {
    return this.autoresService.listarAutores();
  }

  @Get('/listar-autor/:id')
  listarAutor(@Param('id', ParseIntPipe) id: number) {
    return this.autoresService.listarAutor(id);
  }

  @Post('/criar-autor')
  criarAutor(@Body() bodyrequest: CriarAutorDto) {
    return this.autoresService.criarAutor(bodyrequest);
  }

  @Put('/atualizar-autor/:id')
  atualizarAutor(
    @Param('id', ParseIntPipe) idAutor: number,
    @Body() bodyrequest: any,
  ) {
    return this.autoresService.atualizarAutor(idAutor, bodyrequest);
  }

  //@Delete('/deletar-autor/:id')
  //deletarAutor(
  //  @Param('id', ParseIntPipe) idAutor: number,
  //   @Body() bodyrequest: any,
  // ) {
  //  return this.autoresService.deletarAutor(idAutor, bodyrequest);
  // }
}
