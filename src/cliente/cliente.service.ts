import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICliente } from 'src/common/interfaces/cliente.interface';
import { UpdateProductoDto } from 'src/producto/dto/update.producto.dt';
import { Clientes } from './schemas/clientes.schema';

@Injectable()
export class ClienteService {
    constructor(@InjectModel(Clientes.name) private readonly model:Model<any>){}

    async findAll():Promise<ICliente[]> {
        return await  this.model.find();
    }
    async findOne(idCliente: string):Promise<ICliente> {
        return await this.model.findById(idCliente);
    }
    async update(idCliente: string, updateClienteDTO: UpdateProductoDto):Promise<ICliente> {
        return await this.model.findByIdAndUpdate(idCliente,updateClienteDTO,{new:true});
    }
    async delete(idCliente: string):Promise<any> {
        await this.model.findByIdAndDelete(idCliente);
        return {status:HttpStatus.OK,msg:'Deleted activitie'};
    }
}
