import { Body, Controller, Post } from '@nestjs/common';
import { RegisterClienteDto } from 'src/cliente/dto/register.cliente.dto';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login.auth.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Authentificacion')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('/register')
    @ApiOperation({ summary: 'Registro de nuevos clientes' })
    async register(@Body() regiterClienteDto:RegisterClienteDto){
        return this.authService.register(regiterClienteDto)
    }
    @Post("/login")
    @ApiOperation({ summary: 'Login con las credenciales adecuadas' })
    login(@Body() loginAuthDto:LoginAuthDto){
        return this.authService.login(loginAuthDto);
    }
}
