import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterVentaDto } from './dto/register.venta.dto';
import { VentaService } from './venta.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Ventas')
@Controller('venta')
export class VentaController {
    constructor(private readonly ventaService: VentaService){}

    @Post('/create')
    @ApiOperation({ summary: 'Crear una nueva venta' })
    create(@Body() regiterVentaDTO:RegisterVentaDto){
        return this.ventaService.create(regiterVentaDTO);
    }
    @Get('/all')
    @ApiOperation({ summary: 'Mostrar todas la ventas existentes' })
    findAll(){
        return this.ventaService.findAll();
    }
    @Get(':idVenta')
    @ApiOperation({ summary: 'Mostar venta completa segun id' })
    findOne(@Param('idVenta') idVenta:string){
        return this.ventaService.findOne(idVenta);
    }
}
