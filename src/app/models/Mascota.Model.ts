import {MascotaInterface} from "../interfaces/MascotaInterface";


export class MascotaModel implements MascotaInterface{

  _id: string | null = "";
  nombre: string = "";
  especie: string = "";
  raza: string = "";
  edad: string = "";
  sexo: string = "";
}
