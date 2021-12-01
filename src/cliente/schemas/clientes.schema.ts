import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientesDocument =  Clientes & Document;

@Schema()
export class  Clientes{
    @Prop({required:true})
    nombre: string;

    @Prop({required:true})
    apellido: string;

    @Prop({required:true,unique:true})
    dni: string;

    @Prop({required:true,unique:true})
    email: string;

    @Prop({required:true})
    password: string;
}
export const ClientesSchema = SchemaFactory.createForClass(Clientes);