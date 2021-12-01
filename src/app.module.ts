import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';
import { VentaModule } from './venta/venta.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.env'],
      isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    AuthModule, 
    ClienteModule, 
    ProductoModule, 
    VentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
