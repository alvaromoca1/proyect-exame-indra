import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RegisterProductoDto } from './dto/register.producto.dto';
import { UpdateProductoDto } from './dto/update.producto.dt';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService){}

    @Post('/register')
    create(@Body() registerProductoDTO:RegisterProductoDto){
        return this.productoService.create(registerProductoDTO);
    }

    @Get('/all')
    finAll(){
        return this.productoService.finAll();
    }

    @Get(':idProduct')
    findOne(@Param('idProduct') idProduct:string){
        return this.productoService.findOne(idProduct);
    }
    @Put(':idProduct')
    update(@Param('idProduct') idProduct:string, @Body() updateProductoDTO:UpdateProductoDto){
        return this.productoService.update(idProduct,updateProductoDTO);
    }

    @Delete(':idProduct')
    delete(@Param('idProduct') idProduct:string){
        return this.productoService.delete(idProduct)
    }


}
