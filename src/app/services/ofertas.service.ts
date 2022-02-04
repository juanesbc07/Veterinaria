import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductoModel} from "../models/Producto.Model";
import {delay, map} from "rxjs";
import {MascotaModel} from "../models/Mascota.Model";
import {OfertaModel} from "../models/Oferta.Model";

@Injectable({
  providedIn: 'root'
})

export class OfertasService {

  private url = "https://veterinaria2-21917-default-rtdb.firebaseio.com";


  constructor( private _http: HttpClient ) { }

  crear( oferta: OfertaModel ){
    return this._http.post(`${ this.url }/ofertas.json`, oferta )
      .pipe(
        map( (resp: any) => {
          oferta._id = resp.name;
          return oferta;
        })
      )
  }

  actualizar( oferta: OfertaModel ){

    const ofertaAux = {
      ...oferta
    }

    // @ts-ignore
    delete ofertaAux._id;

    return this._http.put(`${ this.url }/ofertas/${ oferta._id }.json`, ofertaAux);
  }

  listarOferta(id: string | null){
    return this._http.get(`${ this.url }/ofertas/${ id }.json`);
  }

  eliminar(id: string | null){
    return this._http.delete(`${ this.url }/ofertas/${ id }.json`);
  }

  listar(){
    return this._http.get(`${ this.url }/ofertas.json`)
      .pipe(
        map( this._convertirAArreglo ),
        delay(1000)
      );
  }



  private _convertirAArreglo( ofertaObj: object){
    const ofertas: OfertaModel[] = [];
    console.log( ofertaObj );

    if(ofertaObj === null) {
      return [];
    }

    Object.keys( ofertaObj ).forEach( key => {
      // @ts-ignore
      const oferta: OfertaModel = ofertaObj[key];
      oferta._id = key;

      ofertas.push( oferta );
    } )

    return ofertas;
  }


}
