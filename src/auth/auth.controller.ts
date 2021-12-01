import { Body, Controller, Post } from '@nestjs/common';
import { RegisterClienteDto } from 'src/cliente/dto/register.cliente.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('/register')
    async register(@Body() regiterClienteDto:RegisterClienteDto){
        return this.authService.register(regiterClienteDto)
    }
}
