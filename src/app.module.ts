import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';
import { VentaModule } from './venta/venta.module';

@Module({
  imports: [AuthModule, ClienteModule, ProductoModule, VentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
