import { Body, Controller, Post } from '@nestjs/common';
import { RegisterClienteDto } from 'src/cliente/dto/register.cliente.dto';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login.auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('/register')
    async register(@Body() regiterClienteDto:RegisterClienteDto){
        return this.authService.register(regiterClienteDto)
    }
    @Post("/login")
    login(@Body() loginAuthDto:LoginAuthDto){
        return this.authService.login(loginAuthDto);
    }
}
