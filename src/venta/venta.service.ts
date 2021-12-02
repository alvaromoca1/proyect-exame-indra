import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClienteService } from 'src/cliente/cliente.service';
import { ProductoService } from 'src/producto/producto.service';
import { RegisterVentaDto } from './dto/register.venta.dto';
import { DetalleVentas } from './schemas/dventa.schema';
import { Ventas } from './schemas/ventas.schema';

@Injectable()
export class VentaService {
    constructor(
        @InjectModel(Ventas.name) private readonly modelVentas:Model<any>,
        @InjectModel(DetalleVentas.name) private readonly modelDetalleVentas:Model<any>,
        private readonly clienteService:ClienteService,
        private readonly productoService: ProductoService
    ){}
    async create(regiterVentaDTO: RegisterVentaDto) {
        const {idCliente,fecha,idProducto}=regiterVentaDTO;
        await this.clienteService.findOne(idCliente);
        await this.productoService.findOne(idProducto);
        const newVenta = await new this.modelVentas({idCliente,fecha}).save();
        const idVenta = String(newVenta._id)
        const newDetalleVenta= await new this.modelDetalleVentas({idVenta,idProducto}).save();
        return {
            idVenta: idVenta,
            idCliente:newVenta.idCliente,
            fecha:newVenta.fecha,
            idDetalleVenta: newDetalleVenta._id,
            idProducto: newDetalleVenta.idProducto
        }
        
    }
    async findAll() {
        return await this.modelVentas.find();
    }
    async findOne(idVenta: string):Promise<any> {
        const venta = await this.modelVentas.findById(idVenta);
        const Dventa = await this.modelDetalleVentas.findOne({idVenta:idVenta});
        return {
            idVenta: venta._id,
            idCliente:venta.idCliente,
            fecha:venta.fecha,
            idDetalleVenta: Dventa._id,
            idProducto: Dventa.idProducto
        }
    }
}
