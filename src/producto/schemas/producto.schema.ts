import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductosDocument =  Productos & Document;

@Schema()
export class  Productos{
    @Prop({required:true})
    nombre: string;

    @Prop({required:true})
    precio: number;
}
export const ProductosSchema = SchemaFactory.createForClass(Productos);