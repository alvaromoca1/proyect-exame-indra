import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RegisterProductoDto } from './dto/register.producto.dto';
import { UpdateProductoDto } from './dto/update.producto.dt';
import { ProductoService } from './producto.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService){}

    @Post('/register')
    @ApiOperation({ summary: 'Regsitro de nuevos productos' })
    create(@Body() registerProductoDTO:RegisterProductoDto){
        return this.productoService.create(registerProductoDTO);
    }

    @Get('/all')
    @ApiOperation({ summary: 'Mostrar todos los productos' })
    finAll(){
        return this.productoService.finAll();
    }

    @Get(':idProduct')
    @ApiOperation({ summary: 'Mostrar producto segun su id' })
    findOne(@Param('idProduct') idProduct:string){
        return this.productoService.findOne(idProduct);
    }
    @Put(':idProduct')
    @ApiOperation({ summary: 'Actulizar un producto existente' })
    update(@Param('idProduct') idProduct:string, @Body() updateProductoDTO:UpdateProductoDto){
        return this.productoService.update(idProduct,updateProductoDTO);
    }

    @Delete(':idProduct')
    @ApiOperation({ summary: 'Eliminar un producto existente' })
    delete(@Param('idProduct') idProduct:string){
        return this.productoService.delete(idProduct)
    }


}
