import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterVentaDto {
    @IsNotEmpty()
    @IsString()
    idCliente: string;

    @IsNotEmpty()
    @IsString()
    fecha: string;

    @IsNotEmpty()
    @IsString()
    idProducto: string;
}
