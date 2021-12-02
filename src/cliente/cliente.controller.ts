import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateProductoDto } from 'src/producto/dto/update.producto.dt';
import { ClienteService } from './cliente.service';
import { RegisterClienteDto } from './dto/register.cliente.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Cliente')
@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService){
    }
    @Get('/all')
    @ApiOperation({ summary: 'Lista todos los clientes' })
    findAll(){
        this.clienteService.findAll();
    }
    @Get(':idCliente')
    @ApiOperation({ summary: 'informacion de un solo usuario' })
    findOne(@Param('idCliente') idCliente:string){
        this.clienteService.findOne(idCliente);
    }
    @Put(':idCliente')
    @ApiOperation({ summary: 'Actualizacion del un usuario' })
    update(@Param('idCliente') idCliente:string,@Body() updateClienteDTO:UpdateProductoDto ){
        this.clienteService.update(idCliente,updateClienteDTO);
    }
    @Delete(':idCliente')
    @ApiOperation({ summary: 'Eliminacion de un usuario existente' })
    delete(@Param('idCliente') idCliente:string){
        this.clienteService.delete(idCliente);
    }
    
}
