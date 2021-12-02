import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateProductoDto } from 'src/producto/dto/update.producto.dt';
import { ClienteService } from './cliente.service';
import { RegisterClienteDto } from './dto/register.cliente.dto';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService){
    }
    @Get('/all')
    findAll(){
        this.clienteService.findAll();
    }
    @Get(':idCliente')
    findOne(@Param('idCliente') idCliente:string){
        this.clienteService.findOne(idCliente);
    }
    @Put(':idCliente')
    update(@Param('idCliente') idCliente:string,@Body() updateClienteDTO:UpdateProductoDto ){
        this.clienteService.update(idCliente,updateClienteDTO);
    }
    @Delete(':idCliente')
    delete(@Param('idCliente') idCliente:string){
        this.clienteService.delete(idCliente);
    }
    
}
