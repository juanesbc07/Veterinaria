import { Component, OnInit } from '@angular/core';
import {ProductoModel} from "../../../models/Producto.Model";
import {MascotaModel} from "../../../models/Mascota.Model";
import {ProductosService} from "../../../services/productos.service";
import {MascotasService} from "../../../services/mascotas.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  mascotas: MascotaModel[] = [];
  cargando = true;

  constructor(private _mascotaService: MascotasService) {}

  ngOnInit(): void {
    this._mascotaService.listar()
      .subscribe( resp =>{
        this.mascotas = resp;
        this.cargando = false;
      })
  }

  eliminar( mascota: MascotaModel, i: number ){

    // @ts-ignore
    Swal.fire({
      title: '¿Está seguro?',
      text: `Desea eliminar a ${ mascota.nombre }`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then( resp => {
      if(resp.value){
        this.mascotas.splice(i, 1);
        this._mascotaService.eliminar( mascota._id ).subscribe();
      }
    });

  }


}
