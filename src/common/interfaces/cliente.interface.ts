export interface ICliente extends Document{
    _id: any;
    nombre:string;
    apellido:string;
    dni:string;
    email:string;
    password:string;
}