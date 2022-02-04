import { Component, OnInit } from '@angular/core';
import {MascotaModel} from "../../../models/Mascota.Model";
import {OfertaModel} from "../../../models/Oferta.Model";
import {MascotasService} from "../../../services/mascotas.service";
import {OfertasService} from "../../../services/ofertas.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  ofertas: OfertaModel[] = [];
  cargando = true;

  constructor(private _ofertaService: OfertasService) { }

  ngOnInit(): void {

    this._ofertaService.listar()
      .subscribe( resp =>{
        this.ofertas = resp;
        this.cargando = false;
      })
  }

  eliminar( oferta: OfertaModel, i: number ){

    // @ts-ignore
    Swal.fire({
      title: '¿Está seguro?',
      text: `Desea eliminar a ${ oferta.descuento }`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then( resp => {
      if(resp.value){
        this.ofertas.splice(i, 1);
        this._ofertaService.eliminar( oferta._id ).subscribe();
      }
    });

  }

}
