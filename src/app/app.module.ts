import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

/** COMPONENTS **/
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './modulo_admin/components/dashboard-admin/dashboard-admin.component';
import { MenuAdminComponent } from './modulo_admin/components/shared/menu-admin/menu-admin.component';
import { MenuTiendaComponent } from './modulo_tienda/components/shared/menu-tienda/menu-tienda.component';
import { DashboardTiendaComponent } from './modulo_tienda/components/dashboard-tienda/dashboard-tienda.component';
import { DashboardUsuarioComponent } from './modulo_usuario/components/dashboard-usuario/dashboard-usuario.component';
import { MenuUsuarioComponent } from './modulo_usuario/components/shared/menu-usuario/menu-usuario.component';
import { MenuHeaderComponent } from './modulo_admin/components/shared/menu-header/menu-header.component';
import { GeneralAdminComponent } from './modulo_admin/general-admin/general-admin.component';
import { GeneralTiendaComponent } from './modulo_tienda/general-tienda/general-tienda.component';
import { GeneralUsuarioComponent } from './modulo_usuario/general-usuario/general-usuario.component';
import { MenuHeaderTiendaComponent } from './modulo_tienda/components/shared/menu-header-tienda/menu-header-tienda.component';
import { MenuHeaderUsuarioComponent } from './modulo_usuario/components/shared/menu-header-usuario/menu-header-usuario.component';
import { UsuarioComponent } from './modulo_admin/components/usuario/usuario.component';
import { UsuariosComponent } from './modulo_admin/components/usuarios/usuarios.component';
import { MascotaComponent } from './modulo_cliente/components/mascota/mascota.component';
import { OfertasComponent } from './modulo_cliente/components/ofertas/ofertas.component';
import { OfertaComponent } from './modulo_cliente/components/oferta/oferta.component';
import {ProductoComponent} from "./modulo_cliente/components/producto/producto.component";
import {ProductosComponent} from "./modulo_cliente/components/productos/productos.component";
import {MascotasComponent} from "./modulo_cliente/components/mascotas/mascotas.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    MenuAdminComponent,
    MenuTiendaComponent,
    DashboardTiendaComponent,
    DashboardUsuarioComponent,
    MenuUsuarioComponent,
    MenuHeaderComponent,
    GeneralAdminComponent,
    GeneralTiendaComponent,
    GeneralUsuarioComponent,
    MenuHeaderTiendaComponent,
    MenuHeaderUsuarioComponent,
    UsuarioComponent,
    UsuariosComponent,
    MascotaComponent,
    OfertasComponent,
    OfertaComponent,
    ProductoComponent,
    ProductosComponent,
    MascotaComponent,
    MascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
