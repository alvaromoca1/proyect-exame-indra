import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ClienteController } from 'src/cliente/cliente.controller';
import { ClienteService } from 'src/cliente/cliente.service';
import { Clientes, ClientesSchema } from 'src/cliente/schemas/clientes.schema';
import { AutorizationMiddleware } from 'src/common/middleware/autorization.middleware';
import { ProductoController } from 'src/producto/producto.controller';
import { ProductoService } from 'src/producto/producto.service';
import { Productos, ProductosSchema } from 'src/producto/schemas/producto.schema';
import { DetalleVentas, DetalleVentasSchema } from 'src/venta/schemas/dventa.schema';
import { Ventas, VentasSchema } from 'src/venta/schemas/ventas.schema';
import { VentaController } from 'src/venta/venta.controller';
import { VentaService } from 'src/venta/venta.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.env'],
      isGlobal:true,
    }),
    MongooseModule.forFeature([
      {name:Clientes.name,schema:ClientesSchema},
      {name:Ventas.name,schema:VentasSchema},
      {name:DetalleVentas.name,schema:DetalleVentasSchema},
      {name:Productos.name,schema:ProductosSchema},
    ]),
    PassportModule,
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions:{expiresIn: process.env.JWT_EXPIRES}
    })
  ],
  controllers: [AuthController,VentaController,ClienteController,ProductoController],
  providers: [AuthService,VentaService,ClienteService,ProductoService]
})
export class AuthModule {
  //mdware pra los controladores
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AutorizationMiddleware)
    .forRoutes(
      VentaController,
      ClienteController,
      ProductoController
    );
  }
}
