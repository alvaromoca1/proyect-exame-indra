import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegisterClienteDto } from 'src/cliente/dto/register.cliente.dto';
import { Clientes } from 'src/cliente/schemas/clientes.schema';
import { ICliente } from 'src/common/interfaces/cliente.interface';

@Injectable()
export class AuthService {
    constructor(@InjectModel(Clientes.name) private clientesModel:Model<ICliente>, private jwtService:JwtService){}

    async hashPassword(password:string):Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }
    async register(regiterClienteDto: RegisterClienteDto):Promise<ICliente> {
        const hash = await this.hashPassword(regiterClienteDto.password);
        const newCliente = new this.clientesModel({...regiterClienteDto,password:hash});
        return await newCliente.save();
    }
}
