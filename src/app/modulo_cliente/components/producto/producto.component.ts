import { Component, OnInit } from '@angular/core';
import {ProductoModel} from "../../../models/Producto.Model";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";
import {Observable} from "rxjs";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: ProductoModel = new ProductoModel();

  constructor() { }

  ngOnInit(): void {
  }

  guardar( formProducto: NgForm){

    console.log(formProducto);
    console.log(this.producto);

    // if(formProducto.invalid){
    //   return;
    // }
    //
    // Swal.fire({
    //   icon: 'info',
    //   title: 'Espere...',
    //   text: 'Guardando la información!',
    //   allowOutsideClick: false,
    //   showConfirmButton: false,
    //   allowEscapeKey: false
    // });
    //
    // Swal.showLoading();
    //
    // let peticion:Observable<any>;
    //
    // if(this.user._id) {
    //   peticion = this._userService.actualizar( this.user );
    // } else {
    //   peticion = this._userService.crear( this.user );
    // }
    //
    // peticion.subscribe( resp => {
    //   Swal.fire({
    //     icon: 'success',
    //     title: this.user.fullName,
    //     text: '¡Se almacenó correctamente!'
    //   });
    // });
  }

}
