import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductoModel} from "../models/Producto.Model";
import {delay, map} from "rxjs";
import {MascotaModel} from "../models/Mascota.Model";

@Injectable({
  providedIn: 'root'
})

export class MascotasService {

  private url = "https://veterinaria2-21917-default-rtdb.firebaseio.com";

  constructor( private _http: HttpClient ) { }

  crear( mascota: MascotaModel ){
    return this._http.post(`${ this.url }/mascotas.json`, mascota )
      .pipe(
        map( (resp: any) => {
          mascota._id = resp.name;
          return mascota;
        })
      )
  }

  actualizar( mascota: MascotaModel ){

    const mascotaAux = {
      ...mascota
    }

    // @ts-ignore
    delete mascotaAux._id;

    return this._http.put(`${ this.url }/mascotas/${ mascota._id }.json`, mascotaAux);
  }

  listarMascota(id: string | null){
    return this._http.get(`${ this.url }/mascotas/${ id }.json`);
  }

  eliminar(id: string | null){
    return this._http.delete(`${ this.url }/mascotas/${ id }.json`);
  }

  listar(){
    return this._http.get(`${ this.url }/mascotas.json`)
      .pipe(
        map( this._convertirAArreglo ),
        delay(1000)
      );
  }



  private _convertirAArreglo( mascotaObj: object){
    const mascotas: MascotaModel[] = [];
    console.log( mascotaObj );

    if(mascotaObj === null) {
      return [];
    }

    Object.keys( mascotaObj ).forEach( key => {
      // @ts-ignore
      const mascota: MascotaModel = mascotaObj[key];
      mascota._id = key;

      mascotas.push( mascota );
    } )

    return mascotas;
  }


}
