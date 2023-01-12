import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';

import{SharedModule}from '../shared/shared.module';
import{ComponentsModule}from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { OperadorVueloComponent } from './operador-vuelo/operador-vuelo.component';
import { DeteOperadoresComponent } from './dete-operadores/dete-operadores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { OperadorVuelosComponent } from './bitacoras/operador-vuelos/operador-vuelos.component';
import { DeterOperadoresComponent } from './bitacoras/deter-operadores/deter-operadores.component';

/*
/Bitacoras Estimado
*/
import { VueloXagglComponent } from './bitacoras/vuelo-xaggl/vuelo-xaggl.component';
import { VueloXauyrComponent } from './bitacoras/vuelo-xauyr/vuelo-xauyr.component';
import { VueloXalfrComponent } from './bitacoras/vuelo-xalfr/vuelo-xalfr.component';
import { VueloXaefrComponent } from './bitacoras/vuelo-xaefr/vuelo-xaefr.component';
import { VueloXalrcComponent } from './bitacoras/vuelo-xalrc/vuelo-xalrc.component';

/*
/Bitacoras Real
*/
import { VueloXauyrRealComponent } from './bitacoras-real/vuelo-xauyr-real/vuelo-xauyr-real.component';
import { VueloXalfrRealComponent } from './bitacoras-real/vuelo-xalfr-real/vuelo-xalfr-real.component';
import { VueloXagglRealComponent } from './bitacoras-real/vuelo-xaggl-real/vuelo-xaggl-real.component';
import { VueloXaefrRealComponent } from './bitacoras-real/vuelo-xaefr-real/vuelo-xaefr-real.component';
import { VueloXalrcRealComponent } from './bitacoras-real/vuelo-xalrc-real/vuelo-xalrc-real.component';
import { GraficasComponent } from './bitacoras/graficas/graficas.component';
import { DocumentosComponent } from './bitacoras/documentos/documentos.component';
import { SumaryComponent } from './bitacoras/sumary/sumary.component';
import { SumaryFinalComponent } from './bitacoras/sumary-final/sumary-final.component';

/*
/Precios
*/
import { PrecioAterriajeMexComponent } from './bitacoras/precio-aterriaje-mex/precio-aterriaje-mex.component';
import { PrecioPlataformaComponent } from './precios/precio-plataforma/precio-plataforma.component';
import { PrecioCombustibleComponent } from './bitacoras/precio-combustible/precio-combustible.component';

import { PrecioAterrizajeCamComponent } from './precios/precio-aterrizaje-cam/precio-aterrizaje-cam.component';
import { PrecioAterrizajeMexComponent } from './precios/precio-aterrizaje-mex/precio-aterrizaje-mex.component';
import { PrecioCateringComponent } from './precios/precio-catering/precio-catering.component';
import { PrecioHotelTripulacionComponent } from './precios/precio-hotel-tripulacion/precio-hotel-tripulacion.component';
import { PrecioMantenimientoComponent } from './precios/precio-mantenimiento/precio-mantenimiento.component';

import { PrecioMigracionCamComponent } from './precios/precio-migracion-cam/precio-migracion-cam.component';
import { PrecioMotoresComponent } from './precios/precio-motores/precio-motores.component';
import { PrecioPersonalAlmacenComponent } from './precios/precio-personal-almacen/precio-personal-almacen.component';
import { PrecioPersonalRampaComponent } from './precios/precio-personal-rampa/precio-personal-rampa.component';
import { PrecioPlataformaCamComponent } from './precios/precio-plataforma-cam/precio-plataforma-cam.component';
import { PrecioRentaAlmacenComponent } from './precios/precio-renta-almacen/precio-renta-almacen.component';
import { PrecioRentaEquipoRampaComponent } from './precios/precio-renta-equipo-rampa/precio-renta-equipo-rampa.component';
import { PrecioSeguridadComponent } from './precios/precio-seguridad/precio-seguridad.component';
import { PrecioSupervicionDespachoComponent } from './precios/precio-supervicion-despacho/precio-supervicion-despacho.component';
import { PrecioSupervicionDespachoCamComponent } from './precios/precio-supervicion-despacho-cam/precio-supervicion-despacho-cam.component';
import { PrecioViaticosComponent } from './precios/precio-viaticos/precio-viaticos.component';
import { PrecioCalculoSeneamComponent } from './precios/precio-calculo-seneam/precio-calculo-seneam.component';
import { PrecioServicioRampaComponent } from './precios/precio-servicio-rampa/precio-servicio-rampa.component';
import { PrecioServicioRampaCamComponent } from './precios/precio-servicio-rampa-cam/precio-servicio-rampa-cam.component';
import { PrecioSobreCocesnaComponent } from './precios/precio-sobre-cocesna/precio-sobre-cocesna.component';
/** Formulario nuevo*/
import { PrecioPlataCamFormComponent } from './formularios/precio-plata-cam-form/precio-plata-cam-form.component';
import { PrecioSobreCocesnaFormComponent } from './formularios/precio-sobre-cocesna-form/precio-sobre-cocesna-form.component';
import { PrecioAterrizajeCamFormComponent } from './formularios/precio-aterrizaje-cam-form/precio-aterrizaje-cam-form.component';
import { PrecioMotoresFormComponent } from './formularios/precio-motores-form/precio-motores-form.component';
import { PrecioCateringFormComponent } from './formularios/precio-catering-form/precio-catering-form.component';

import { PrecioCalculoSeneamFormComponent } from './formularios/precio-calculo-seneam-form/precio-calculo-seneam-form.component';
import { PrecioEquipoRampaFormComponent } from './formularios/precio-equipo-rampa-form/precio-equipo-rampa-form.component';
import { PrecioHotelTripulacionFormComponent } from './formularios/precio-hotel-tripulacion-form/precio-hotel-tripulacion-form.component';
import { PrecioMantenimientoFormComponent } from './formularios/precio-mantenimiento-form/precio-mantenimiento-form.component';
import { PrecioPersonalAlmacenFormComponent } from './formularios/precio-personal-almacen-form/precio-personal-almacen-form.component';
import { PrecioPersonalRampaFormComponent } from './formularios/precio-personal-rampa-form/precio-personal-rampa-form.component';
import { PrecioRentaAlmacenFormComponent } from './formularios/precio-renta-almacen-form/precio-renta-almacen-form.component';
import { PrecioSeguridadFormComponent } from './formularios/precio-seguridad-form/precio-seguridad-form.component';
import { PrecioSupervicionDespachoFormComponent } from './formularios/precio-supervicion-despacho-form/precio-supervicion-despacho-form.component';
import { PrecioSupervicionDespachoCamFormComponent } from './formularios/precio-supervicion-despacho-cam-form/precio-supervicion-despacho-cam-form.component';
import { PrecioViaticosFormComponent } from './formularios/precio-viaticos-form/precio-viaticos-form.component';
import { PrecioMigracionCamFormComponent } from './formularios/precio-migracion-cam-form/precio-migracion-cam-form.component';
import { PrecioEquipoRampaComponent } from './precios/precio-equipo-rampa/precio-equipo-rampa.component';
import { PrecioAterrizajeMexFormComponent } from './formularios/precio-aterrizaje-mex-form/precio-aterrizaje-mex-form.component';
import { PrecioPlataformaFormComponent } from './formularios/precio-plataforma-form/precio-plataforma-form.component';
import { PrecioServicioRampaFormComponent } from './formularios/precio-servicio-rampa-form/precio-servicio-rampa-form.component';
import { PrecioServicioRampaCamFormComponent } from './formularios/precio-servicio-rampa-cam-form/precio-servicio-rampa-cam-form.component';
import { DeterOperadoresFormComponent } from './bitacoras/deter-operadores-form/deter-operadores-form.component';
import { OperadorVuelosFormComponent } from './bitacoras/operador-vuelos-form/operador-vuelos-form.component';

/*Historicos*/
import { PrecioAterrizajeCamHistComponent } from './precios-historicos/precio-aterrizaje-cam-hist/precio-aterrizaje-cam-hist.component';
import { PrecioAterrizajeMexHistComponent } from './precios-historicos/precio-aterrizaje-mex-hist/precio-aterrizaje-mex-hist.component';
import { PrecioCalculoSeneamHistComponent } from './precios-historicos/precio-calculo-seneam-hist/precio-calculo-seneam-hist.component';
import { PrecioCateringHistComponent } from './precios-historicos/precio-catering-hist/precio-catering-hist.component';
import { PrecioCombustibleHistComponent } from './precios-historicos/precio-combustible-hist/precio-combustible-hist.component';
import { PrecioEquipoRampaHistComponent } from './precios-historicos/precio-equipo-rampa-hist/precio-equipo-rampa-hist.component';
import { PrecioHotelTripulacionHistComponent } from './precios-historicos/precio-hotel-tripulacion-hist/precio-hotel-tripulacion-hist.component';
import { PrecioMantenimientoHistComponent } from './precios-historicos/precio-mantenimiento-hist/precio-mantenimiento-hist.component';
import { PrecioMigracionCamHistComponent } from './precios-historicos/precio-migracion-cam-hist/precio-migracion-cam-hist.component';
import { PrecioMotoresHistComponent } from './precios-historicos/precio-motores-hist/precio-motores-hist.component';
import { PrecioPersonalAlmacenHistComponent } from './precios-historicos/precio-personal-almacen-hist/precio-personal-almacen-hist.component';
import { PrecioPersonalRampaHistComponent } from './precios-historicos/precio-personal-rampa-hist/precio-personal-rampa-hist.component';
import { PrecioPlataformaHistComponent } from './precios-historicos/precio-plataforma-hist/precio-plataforma-hist.component';
import { PrecioPlataformaCamHistComponent } from './precios-historicos/precio-plataforma-cam-hist/precio-plataforma-cam-hist.component';
import { PrecioRentaAlmacenHistComponent } from './precios-historicos/precio-renta-almacen-hist/precio-renta-almacen-hist.component';
import { PrecioRentaEquipoRampaHistComponent } from './precios-historicos/precio-renta-equipo-rampa-hist/precio-renta-equipo-rampa-hist.component';
import { PrecioSeguridadHistComponent } from './precios-historicos/precio-seguridad-hist/precio-seguridad-hist.component';
import { PrecioServicioRampaHistComponent } from './precios-historicos/precio-servicio-rampa-hist/precio-servicio-rampa-hist.component';
import { PrecioServicioRampaCamHistComponent } from './precios-historicos/precio-servicio-rampa-cam-hist/precio-servicio-rampa-cam-hist.component';
import { PrecioSobreCocesnaHistComponent } from './precios-historicos/precio-sobre-cocesna-hist/precio-sobre-cocesna-hist.component';
import { PrecioSupervicionDespachoHistComponent } from './precios-historicos/precio-supervicion-despacho-hist/precio-supervicion-despacho-hist.component';
import { PrecioSupervicionDespachoCamHistComponent } from './precios-historicos/precio-supervicion-despacho-cam-hist/precio-supervicion-despacho-cam-hist.component';
import { PrecioViaticosHistComponent } from './precios-historicos/precio-viaticos-hist/precio-viaticos-hist.component';

import { OperacionesOrigenComponent } from './operaciones/operaciones-origen/operaciones-origen.component';
import { OperacionesMatriculaComponent } from './operaciones/operaciones-matricula/operaciones-matricula.component';
import { SumaryXaEfrComponent } from './sumary/sumary-xa-efr/sumary-xa-efr.component';
import { SumaryXaGglComponent } from './sumary/sumary-xa-ggl/sumary-xa-ggl.component';
import { SumaryXaLfrComponent } from './sumary/sumary-xa-lfr/sumary-xa-lfr.component';
import { SumaryXaLrcComponent } from './sumary/sumary-xa-lrc/sumary-xa-lrc.component';
import { SumaryXaUyrComponent } from './sumary/sumary-xa-uyr/sumary-xa-uyr.component';
import { BitacoraGralComponent } from './sumary/bitacora-gral/bitacora-gral.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent,
    OperadorVueloComponent,
    DeteOperadoresComponent,
    UsuariosComponent,
    OperadorVuelosComponent,
    DeterOperadoresComponent,
    VueloXagglComponent,
    VueloXauyrComponent,
    VueloXalfrComponent,
    VueloXaefrComponent,
    VueloXalrcComponent,
    VueloXauyrRealComponent,
    VueloXalfrRealComponent,
    VueloXagglRealComponent,
    VueloXaefrRealComponent,
    VueloXalrcRealComponent,
    GraficasComponent,
    DocumentosComponent,
    SumaryComponent,
    SumaryFinalComponent,
    PrecioAterriajeMexComponent,
    PrecioPlataformaComponent,
    PrecioCombustibleComponent,
    PrecioAterrizajeCamComponent,
    PrecioAterrizajeMexComponent,
    PrecioCateringComponent,
    PrecioHotelTripulacionComponent,
    PrecioMantenimientoComponent,
    PrecioMigracionCamComponent,
    PrecioMotoresComponent,
    PrecioPersonalAlmacenComponent,
    PrecioPersonalRampaComponent,
    PrecioPlataformaCamComponent,
    PrecioRentaAlmacenComponent,
    PrecioRentaEquipoRampaComponent,
    PrecioSeguridadComponent,
    PrecioSupervicionDespachoComponent,
    PrecioSupervicionDespachoCamComponent,
    PrecioViaticosComponent,
    PrecioCalculoSeneamComponent,
    PrecioServicioRampaComponent,
    PrecioServicioRampaCamComponent,
    PrecioSobreCocesnaComponent,
    PrecioPlataCamFormComponent,
    PrecioSobreCocesnaFormComponent,
    PrecioAterrizajeCamFormComponent,
    PrecioMotoresFormComponent,
    PrecioCateringFormComponent,
    PrecioCalculoSeneamFormComponent,
    PrecioEquipoRampaFormComponent,
    PrecioHotelTripulacionFormComponent,
    PrecioMantenimientoFormComponent,
    PrecioPersonalAlmacenFormComponent,
    PrecioPersonalRampaFormComponent,
    PrecioRentaAlmacenFormComponent,
    PrecioSeguridadFormComponent,
    PrecioSupervicionDespachoFormComponent,
    PrecioSupervicionDespachoCamFormComponent,
    PrecioViaticosFormComponent,
    PrecioMigracionCamFormComponent,
    PrecioEquipoRampaComponent,
    PrecioAterrizajeMexFormComponent,
    PrecioPlataformaFormComponent,
    PrecioServicioRampaFormComponent,
    PrecioServicioRampaCamFormComponent,
    DeterOperadoresFormComponent,
    OperadorVuelosFormComponent,
    PrecioAterrizajeCamHistComponent,
    PrecioAterrizajeMexHistComponent,
    PrecioCalculoSeneamHistComponent,
    PrecioCateringHistComponent,
    PrecioCombustibleHistComponent,
    PrecioEquipoRampaHistComponent,
    PrecioHotelTripulacionHistComponent,
    PrecioMantenimientoHistComponent,
    PrecioMigracionCamHistComponent,
    PrecioMotoresHistComponent,
    PrecioPersonalAlmacenHistComponent,
    PrecioPersonalRampaHistComponent,
    PrecioPlataformaHistComponent,
    PrecioPlataformaCamHistComponent,
    PrecioRentaAlmacenHistComponent,
    PrecioRentaEquipoRampaHistComponent,
    PrecioSeguridadHistComponent,
    PrecioServicioRampaHistComponent,
    PrecioServicioRampaCamHistComponent,
    PrecioSobreCocesnaHistComponent,
    PrecioSupervicionDespachoHistComponent,
    PrecioSupervicionDespachoCamHistComponent,
    PrecioViaticosHistComponent,
    OperacionesOrigenComponent,
    OperacionesMatriculaComponent,
    SumaryXaEfrComponent,
    SumaryXaGglComponent,
    SumaryXaLfrComponent,
    SumaryXaLrcComponent,
    SumaryXaUyrComponent,
    BitacoraGralComponent
  ],
  imports: [
    ChartsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
  ]
})
export class PagesModule { }
