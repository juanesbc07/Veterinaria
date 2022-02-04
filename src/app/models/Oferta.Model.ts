import {MascotaInterface} from "../interfaces/MascotaInterface";
import {OfertaInterface} from "../interfaces/OfertaInterface";


export class OfertaModel implements OfertaInterface{

  _id: string | null = "";
  producto: string = "";
  descuento: string = "";
  precio: string = "";
}
