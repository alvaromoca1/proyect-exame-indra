import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegisterClienteDto } from 'src/cliente/dto/register.cliente.dto';
import { Clientes } from 'src/cliente/schemas/clientes.schema';
import { ICliente } from 'src/common/interfaces/cliente.interface';
import { LoginAuthDto } from './dto/login.auth.dto';

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

    async login(loginAuthDto: LoginAuthDto):Promise<any> {
        const userToAttempt = await this.clientesModel.findOne({email:loginAuthDto.email});
        if(!userToAttempt) throw new UnauthorizedException();
        const validCredential =  await bcrypt.compare(loginAuthDto.password,userToAttempt.password);

        if(validCredential){
            const payload = {email:userToAttempt.email,sub:userToAttempt._id}
            this.jwtService.sign(payload);
            return {
                accessToken:this.jwtService.sign(payload)
            }
        }
        else{
            throw new UnauthorizedException();
        }
    }

    async me(payload){
        let result:any;
        result = this.jwtService.verify(payload);
        const {email}=result;
        const user = await this.clientesModel.findOne({ email: email });
        return user;
        
    }
}
