import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteService } from 'src/cliente/cliente.service';
import { Clientes, ClientesSchema } from 'src/cliente/schemas/clientes.schema';
import { ProductoService } from 'src/producto/producto.service';
import { Productos, ProductosSchema } from 'src/producto/schemas/producto.schema';
import { DetalleVentas, DetalleVentasSchema } from './schemas/dventa.schema';
import { Ventas, VentasSchema } from './schemas/ventas.schema';
import { VentaController } from './venta.controller';
import { VentaService } from './venta.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:Ventas.name,schema:VentasSchema},
      {name:DetalleVentas.name,schema:DetalleVentasSchema},
      {name:Productos.name,schema:ProductosSchema},
      {name:Clientes.name,schema:ClientesSchema}
    ]),
  ],
  controllers: [VentaController],
  providers: [VentaService,ClienteService,ProductoService]
})
export class VentaModule {}
