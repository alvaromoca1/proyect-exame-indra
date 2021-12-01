import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { Clientes, ClientesSchema } from './schemas/clientes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:Clientes.name,schema:ClientesSchema},
    ]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
