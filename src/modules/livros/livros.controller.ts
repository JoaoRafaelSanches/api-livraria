import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { LivrosService } from './livros.repository';

@Controller('livros')
export class LivrosController {
  constructor(private readonly LivrosService: LivrosService) {}

  @Get('/livros-autores')
  async listarLivros() {
    return await this.LivrosService.listarLivros();
  }
}
