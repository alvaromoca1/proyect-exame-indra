import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Clientes, ClientesSchema } from 'src/cliente/schemas/clientes.schema';
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
    ]),
    PassportModule,
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions:{expiresIn: process.env.JWT_EXPIRES}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
