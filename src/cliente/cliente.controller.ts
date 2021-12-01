import { Body, Controller, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { RegisterClienteDto } from './dto/register.cliente.dto';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService){}

}
