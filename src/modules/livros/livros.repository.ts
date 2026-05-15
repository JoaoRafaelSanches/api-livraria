import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import { livrosTabela } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';

@Injectable()
export class LivrosService {
  constructor() {}

  async listarLivros() {
    return await '';
  }
}
export class LivrosRepository {}
