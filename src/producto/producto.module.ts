import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { Productos, ProductosSchema } from './schemas/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:Productos.name,schema:ProductosSchema},
    ]),
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
