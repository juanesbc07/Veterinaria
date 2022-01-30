import {UserInterface} from "../interfaces/User.Interface";
import {ProductoInterface} from "../interfaces/ProductoInterface";

export class ProductoModel implements ProductoInterface{

  _id: string | null = "";
  nombre: string = "";
  marca: string = "";
  precio: string = "";
  descripcion: string = "";
}
