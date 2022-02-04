import { Component, OnInit } from '@angular/core';
import {MascotaModel} from "../../../models/Mascota.Model";
import {OfertaModel} from "../../../models/Oferta.Model";
import {MascotasService} from "../../../services/mascotas.service";
import {ActivatedRoute} from "@angular/router";
import {OfertasService} from "../../../services/ofertas.service";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";
import {Observable} from "rxjs";

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  oferta: OfertaModel = new OfertaModel();


  constructor( private _ofertaService: OfertasService,
               private _route: ActivatedRoute) { }

  ngOnInit(): void {

    const id =  this._route.snapshot.paramMap.get('id');
    console.log("ID: ", id);

    if(id !== 'registrar'){
      this._ofertaService.listarOferta( id )

        // @ts-ignore
        .subscribe((resp: OfertaModel) => {
          this.oferta = resp;
          this.oferta._id = id;
        })
    }

  }

  guardar( formOferta: NgForm){

    if(formOferta.invalid){
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

    if(this.oferta._id) {
      peticion = this._ofertaService.actualizar(this.oferta);
    } else {
      peticion = this._ofertaService.crear(this.oferta);
    }

    // @ts-ignore
    peticion.subscribe( resp => {
      Swal.fire({
        icon: 'success',
        title: this.oferta.descuento,
        text: '¡Se almacenó correctamente!'
      });
    });

  }



}
