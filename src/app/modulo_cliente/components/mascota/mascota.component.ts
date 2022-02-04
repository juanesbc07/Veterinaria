import { Component, OnInit } from '@angular/core';
import {ProductoModel} from "../../../models/Producto.Model";
import {ProductosService} from "../../../services/productos.service";
import {ActivatedRoute} from "@angular/router";
import {MascotaModel} from "../../../models/Mascota.Model";
import {MascotasService} from "../../../services/mascotas.service";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";
import {Observable} from "rxjs";

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  mascota: MascotaModel = new MascotaModel();

  constructor( private _mascotaService: MascotasService,
               private _route: ActivatedRoute) { }



  ngOnInit(): void {

    const id =  this._route.snapshot.paramMap.get('id');
    console.log("ID: ", id);

    if(id !== 'registrar'){
      this._mascotaService.listarMascota( id )

        // @ts-ignore
        .subscribe((resp: MascotaModel) => {
          this.mascota = resp;
          this.mascota._id = id;
        })
    }

  }

  guardar( formMascota: NgForm){

    if(formMascota.invalid){
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

    if(this.mascota._id) {
      peticion = this._mascotaService.actualizar(this.mascota);
    } else {
      peticion = this._mascotaService.crear(this.mascota);
    }

    // @ts-ignore
    peticion.subscribe( resp => {
      Swal.fire({
        icon: 'success',
        title: this.mascota.nombre,
        text: '¡Se almacenó correctamente!'
      });
    });




  }

}
