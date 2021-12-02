import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DetalleVentasDocument =  DetalleVentas & Document;

@Schema()
export class  DetalleVentas{
    @Prop({required:true})
    idVenta: string;

    @Prop({required:true})
    idProducto: string;
}
export const DetalleVentasSchema = SchemaFactory.createForClass(DetalleVentas);