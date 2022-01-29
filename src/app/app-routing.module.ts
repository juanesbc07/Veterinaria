import { RouterModule, Routes } from '@angular/router';
import {DashboardAdminComponent} from "./modulo_admin/components/dashboard-admin/dashboard-admin.component";
import {UsuariosComponent} from "./modulo_admin/components/usuarios/usuarios.component";
import {UsuarioComponent} from "./modulo_admin/components/usuario/usuario.component";
import {DashboardClienteComponent} from "./modulo_cliente/components/dashboard-cliente/dashboard-cliente.component";
import {ProductosComponent} from "./modulo_cliente/components/productos/productos.component";
import {ProductoComponent} from "./modulo_cliente/components/producto/producto.component";
import {MascotasComponent} from "./modulo_cliente/components/mascotas/mascotas.component";
import {MascotaComponent} from "./modulo_cliente/components/mascota/mascota.component";
import {OfertasComponent} from "./modulo_cliente/components/ofertas/ofertas.component";
import {OfertaComponent} from "./modulo_cliente/components/oferta/oferta.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: 'dashboard-admin' , component: DashboardAdminComponent},
  { path: 'dashboard-cliente' , component: DashboardClienteComponent},
  { path: 'productos' , component: ProductosComponent},
  { path: 'producto/:id', component: ProductoComponent},
  { path: 'mascotas' , component:MascotasComponent },
  { path: 'mascota/:id' , component: MascotaComponent},
  { path: 'ofertas' , component: OfertasComponent},
  { path:'oferta/:id' , component: OfertaComponent},
  { path: 'usuarios' , component: UsuariosComponent},
  { path: 'usuario/:id', component: UsuarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard-admin'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
