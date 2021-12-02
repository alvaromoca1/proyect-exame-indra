import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterVentaDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    idCliente: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    fecha: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    idProducto: string;
}
