import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterVentaDto } from './dto/register.venta.dto';
import { VentaService } from './venta.service';

@Controller('venta')
export class VentaController {
    constructor(private readonly ventaService: VentaService){}

    @Post('/create')
    create(@Body() regiterVentaDTO:RegisterVentaDto){
        return this.ventaService.create(regiterVentaDTO);
    }
    @Get('/all')
    findAll(){
        return this.ventaService.findAll();
    }
    @Get(':idVenta')
    findOne(@Param('idVenta') idVenta:string){
        return this.ventaService.findOne(idVenta);
    }
}
