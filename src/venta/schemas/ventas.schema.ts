import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VentasDocument =  Ventas & Document;

@Schema()
export class  Ventas{
    @Prop({required:true})
    idCliente: string;

    @Prop({required:true})
    fecha: string;
}
export const VentasSchema = SchemaFactory.createForClass(Ventas);