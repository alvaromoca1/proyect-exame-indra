import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RegisterProductoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    precio: number;

}
