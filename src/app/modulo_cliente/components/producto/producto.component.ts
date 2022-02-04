import { Component, OnInit } from '@angular/core';
import {ProductoModel} from "../../../models/Producto.Model";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";
import {Observable} from "rxjs";
import {ProductosService} from "../../../services/productos.service";
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../../models/User.Model";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: ProductoModel = new ProductoModel();

  constructor( private _productoService: ProductosService,
               private _route: ActivatedRoute) { }

  ngOnInit(): void {

    const id =  this._route.snapshot.paramMap.get('id');
    console.log("ID: ", id);

    if(id !== 'registrar'){
      this._productoService.listarProducto( id )

        // @ts-ignore
        .subscribe((resp: ProductoModel) => {
          this.producto = resp;
          this.producto._id = id;
        })
    }

  }

  guardar( formProducto: NgForm){

    if(formProducto.invalid){
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Espere...',
      text: 'Guardando la información!',
      allowOutsideClick: false,
      showConfirmButton: false,
      allowEscapeKey: false
    });

    Swal.showLoading();

    let peticion : Observable<any>;

    if(this.producto._id) {
        peticion = this._productoService.actualizar(this.producto);
    } else {
        peticion = this._productoService.crear(this.producto);
    }

    // @ts-ignore
    peticion.subscribe( resp => {
      Swal.fire({
        icon: 'success',
        title: this.producto.nombre,
        text: '¡Se almacenó correctamente!'
      });
    });




  }

}
