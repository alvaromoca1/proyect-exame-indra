import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProducto } from 'src/common/interfaces/producto.interface';
import { RegisterProductoDto } from './dto/register.producto.dto';
import { UpdateProductoDto } from './dto/update.producto.dt';
import { Productos } from './schemas/producto.schema';

@Injectable()
export class ProductoService {
    constructor(@InjectModel(Productos.name) private readonly model:Model<IProducto>){}

    async create(registerProductoDTO: RegisterProductoDto):Promise<IProducto> {
        const newProduct = await new this.model({...registerProductoDTO});
        return await newProduct.save();
    }
    async finAll():Promise<IProducto[]> {
        return await this.model.find();
    }   
    async findOne(idProduct: string):Promise<IProducto> {
        return await this.model.findById(idProduct);
    }
    async update(idProduct: string,updateProductoDTO:UpdateProductoDto):Promise<IProducto> {
        return await this.model.findByIdAndUpdate(idProduct,updateProductoDTO,{new:true});
    }
    async delete(idProduct: string):Promise<any> {
        await this.model.findByIdAndDelete(idProduct);
        return {status:HttpStatus.OK,msg:"Producto Eliminado"};
    }
}
