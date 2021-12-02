import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterClienteDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    apellido: string;

    @ApiProperty()
    @IsNotEmpty()
    dni: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
