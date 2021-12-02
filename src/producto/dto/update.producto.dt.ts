import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateProductoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    precio: number;

}
