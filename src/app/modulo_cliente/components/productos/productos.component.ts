import { Component, OnInit } from '@angular/core';
import {ProductosService} from "../../../services/productos.service";
import {ProductoModel} from "../../../models/Producto.Model";
import {UserModel} from "../../../models/User.Model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  productos: ProductoModel[] = [];
  cargando = true;

  constructor( private _productoService: ProductosService) { }

  ngOnInit(): void {
    this._productoService.listar()
      .subscribe( resp =>{
        this.productos = resp;
        this.cargando = false;
      })
  }

  eliminar( producto: ProductoModel, i: number ){

    // @ts-ignore
    Swal.fire({
      title: '¿Está seguro?',
      text: `Desea eliminar a ${ producto.nombre }`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then( resp => {
      if(resp.value){
        this.productos.splice(i, 1);
        this._productoService.eliminar( producto._id ).subscribe();
      }
    });

  }

}
