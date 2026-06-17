import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CriarUsuarioDTO {
  @IsString({ message: 'o nome deve ser uma string' })
  @IsNotEmpty({ message: 'o nome e obrigatorio' })
  nome: string;

  @IsEmail({}, { message: 'o email deve ser um email valido' })
  @IsNotEmpty({ message: 'o email é obrigatorio' })
  email: string;

  @IsString({ message: 'a senha deve ser uma string' })
  @IsNotEmpty({ message: 'a senha é obrigatoria' })
  password: string;
}
