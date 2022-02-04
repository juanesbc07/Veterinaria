import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay, map} from "rxjs";
import {ProductoModel} from "../models/Producto.Model";

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private url = "https://veterinaria2-21917-default-rtdb.firebaseio.com";

  constructor( private _http: HttpClient ) { }

  crear( producto: ProductoModel ){
    return this._http.post(`${ this.url }/productos.json`, producto )
      .pipe(
        map( (resp: any) => {
          producto._id = resp.name;
          return producto;
        })
      )
  }

  actualizar( producto: ProductoModel ){

    const productoAux = {
      ...producto
    }

    // @ts-ignore
    delete productoAux._id;

    return this._http.put(`${ this.url }/productos/${ producto._id }.json`, productoAux);
  }

  listarProducto(id: string | null){
    return this._http.get(`${ this.url }/productos/${ id }.json`);
  }

  eliminar(id: string | null){
    return this._http.delete(`${ this.url }/productos/${ id }.json`);
  }

  listar(){
    return this._http.get(`${ this.url }/productos.json`)
      .pipe(
        map( this._convertirAArreglo ),
        delay(1000)
      );
  }



  private _convertirAArreglo( productoObj: object){
    const productos: ProductoModel[] = [];
    console.log( productoObj );

    if(productoObj === null) {
      return [];
    }

    Object.keys( productoObj ).forEach( key => {
      // @ts-ignore
      const producto: ProductoModel = productoObj[key];
      producto._id = key;

      productos.push( producto );
    } )

    return productos;
  }


}
