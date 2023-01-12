import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { PerfilComponent } from './perfil/perfil.component';
import { OperadorVueloComponent } from './operador-vuelo/operador-vuelo.component';
import { DeteOperadoresComponent } from './dete-operadores/dete-operadores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

//Bitacoras
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
import { GraficasComponent } from './bitacoras/graficas/graficas.component';
import { DocumentosComponent } from './bitacoras/documentos/documentos.component';
import { SumaryComponent } from './bitacoras/sumary/sumary.component';
import { SumaryFinalComponent } from './bitacoras/sumary-final/sumary-final.component';
/*
/Bitacoras Real
*/
import { VueloXauyrRealComponent } from './bitacoras-real/vuelo-xauyr-real/vuelo-xauyr-real.component';
import { VueloXalfrRealComponent } from './bitacoras-real/vuelo-xalfr-real/vuelo-xalfr-real.component';
import { VueloXagglRealComponent } from './bitacoras-real/vuelo-xaggl-real/vuelo-xaggl-real.component';
import { VueloXaefrRealComponent } from './bitacoras-real/vuelo-xaefr-real/vuelo-xaefr-real.component';
import { VueloXalrcRealComponent } from './bitacoras-real/vuelo-xalrc-real/vuelo-xalrc-real.component';

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
import { PrecioPersonalAlmacenComponent } from './precios/precio-personal-almacen/precio-personal-almacen.component';


//Form
import { PrecioAterrizajeCamFormComponent } from './formularios/precio-aterrizaje-cam-form/precio-aterrizaje-cam-form.component';
import { PrecioMotoresFormComponent } from './formularios/precio-motores-form/precio-motores-form.component';
import { PrecioCateringFormComponent } from './formularios/precio-catering-form/precio-catering-form.component';

import { PrecioSobreCocesnaFormComponent } from './formularios/precio-sobre-cocesna-form/precio-sobre-cocesna-form.component';
import { PrecioPlataCamFormComponent } from './formularios/precio-plata-cam-form/precio-plata-cam-form.component';
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

import { PrecioEquipoRampaComponent } from './precios/precio-equipo-rampa/precio-equipo-rampa.component';
import { PrecioMigracionCamFormComponent } from './formularios/precio-migracion-cam-form/precio-migracion-cam-form.component';
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
/*Sumarys*/ 
import { SumaryXaEfrComponent } from './sumary/sumary-xa-efr/sumary-xa-efr.component';
import { SumaryXaGglComponent } from './sumary/sumary-xa-ggl/sumary-xa-ggl.component';
import { SumaryXaLfrComponent } from './sumary/sumary-xa-lfr/sumary-xa-lfr.component';
import { SumaryXaLrcComponent } from './sumary/sumary-xa-lrc/sumary-xa-lrc.component';
import { SumaryXaUyrComponent } from './sumary/sumary-xa-uyr/sumary-xa-uyr.component';

import { BitacoraGralComponent } from './sumary/bitacora-gral/bitacora-gral.component';


const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate:[AuthGuard],
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' }},
            { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica #1' }},
            { path: 'account-setting', component:AccountSettingsComponent,data: { titulo: 'Ajustes de cuenta' }},
            //{ path: '' ,redirectTo:'/dashboard',pathMatch:'full'},

            { path: 'summaryEfr', component: SumaryXaEfrComponent, data: { titulo: 'Summary Efr' }},
            { path: 'summaryGgl', component: SumaryXaGglComponent, data: { titulo: 'Summary Ggl' }},
            { path: 'summaryLfr', component: SumaryXaLfrComponent, data: { titulo: 'Summary Lfr' }},
            { path: 'summaryLrc', component: SumaryXaLrcComponent, data: { titulo: 'Sumary Lrc' }},
            { path: 'summaryUyr', component: SumaryXaUyrComponent, data: { titulo: 'Summary Uyr' }},


            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' }},
            { path: 'operadorVuelo', component: OperadorVueloComponent, data: { titulo: 'Operador Vuelo' }},
            { path: 'deteOperadores', component: DeteOperadoresComponent, data: { titulo: 'Determinacion Operadores' }},
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios' }},
            //Bitacoras
            { path: 'bitOperadorVuelos', component: OperadorVuelosComponent, data: { titulo: 'Bitacora Operador Vuelo' }},
            { path: 'bitDeterOperadores', component: DeterOperadoresComponent, data: { titulo: 'Bitacora Determinacion Operadores' }},
            { path: 'bitacoraGral', component: BitacoraGralComponent, data: { titulo: 'Bitacora General' }},

            { path: 'bitVueloGgl', component: VueloXagglComponent, data: { titulo: 'Bitacora Vuelo XA-GGL' }},
            { path: 'bitVueloUyr', component: VueloXauyrComponent, data: { titulo: 'Bitacora Vuelo XA-UYR' }},
            { path: 'bitVueloLfr', component: VueloXalfrComponent, data: { titulo: 'Bitacora Vuelo XA-LFR' }},
            { path: 'bitVueloEfr', component: VueloXaefrComponent, data: { titulo: 'Bitacora Vuelo XA-EFR' }},
            { path: 'bitVueloLrc', component: VueloXalrcComponent, data: { titulo: 'Bitacora Vuelo XA-LRC' }},
            { path: 'graficaDest', component: GraficasComponent, data: { titulo: 'Grafica Destinos' }},
            { path: 'docExcel', component: DocumentosComponent, data: { titulo: 'Documento Excel' }},
            { path: 'sumary', component: SumaryComponent, data: { titulo: 'Sumary' }},
            { path: 'sumaryFinal', component: SumaryFinalComponent, data: { titulo: 'Sumary Final' }},


            { path: 'bitReaVueloGgl', component: VueloXagglRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-GGL' }},
            { path: 'bitReaVueloUyr', component: VueloXauyrRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-UYR' }},
            { path: 'bitReaVueloLfr', component: VueloXalfrRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-LFR' }},
            { path: 'bitReaVueloEfr', component: VueloXaefrRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-EFR' }},
            { path: 'bitReaVueloLrc', component: VueloXalrcRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-LRC' }},

            { path: 'precioAterrizajeMex', component: PrecioAterriajeMexComponent, data: { titulo: 'Precio Aterrizaje México' }},
            { path: 'precioPlataforma', component: PrecioPlataformaComponent, data: { titulo: 'Precio Plataforma' }},
            { path: 'precioCombustible', component: PrecioCombustibleComponent, data: { titulo: 'Precio Combustible' }},

            { path: 'precioAterrizaCam', component: PrecioAterrizajeCamComponent, data: { titulo: 'Precio Aterrizaje CAM' }},
            { path: 'precioCatering', component: PrecioCateringComponent, data: { titulo: 'Precio Catering' }},
            { path: 'precioHotelTripulacion', component: PrecioHotelTripulacionComponent, data: { titulo: 'Precio Hotel Tripulacion' }},
            { path: 'precioMantenimiento', component: PrecioMantenimientoComponent, data: { titulo: 'Precio Matenimiento' }},
           

            { path: 'precioMigracionCam', component: PrecioMigracionCamComponent, data: { titulo: 'Precio Migracion CAM' }},
            { path: 'precioMotores', component: PrecioMotoresComponent, data: { titulo: 'Precio Motores' }},
            { path: 'precioPersonalRampa', component: PrecioPersonalRampaComponent, data: { titulo: 'Precio Personal Rampa' }},
            { path: 'precioPlataformaCam', component: PrecioPlataformaCamComponent, data: { titulo: 'Precio Plataforma CAM' }},
            { path: 'precioRentaAlmacen', component: PrecioRentaAlmacenComponent, data: { titulo: 'Precio Renta Almacen' }},

            { path: 'precioRentaEquipoRampa', component: PrecioRentaEquipoRampaComponent, data: { titulo: 'Precio Renta Equipo Rampa' }},
            { path: 'precioSeguridad', component: PrecioSeguridadComponent, data: { titulo: 'Precio Seguridad' }},
            { path: 'precioSupervicionDespacho', component: PrecioSupervicionDespachoComponent, data: { titulo: 'Precio Supervicion Despacho' }},
            { path: 'precioSupervicionDespachoCam', component: PrecioSupervicionDespachoCamComponent, data: { titulo: 'Precio Supervicion Despacho CAM' }},
            { path: 'precioViaticos', component: PrecioViaticosComponent, data: { titulo: 'Precio Viaticos' }},

            { path: 'precioCSeneam', component: PrecioCalculoSeneamComponent, data: { titulo: 'Precio Calculo Seneam' }},
            { path: 'precioServicioRampa', component: PrecioServicioRampaComponent, data: { titulo: 'Precio Servicio Rampa' }},
            { path: 'precioServicioRampaCam', component: PrecioServicioRampaCamComponent, data: { titulo: 'Precio Servicio Rampa CAM' }},
            { path: 'precioSobreCocesna', component: PrecioSobreCocesnaComponent, data: { titulo: 'Precio Sobre Cocesna' }},
            { path: 'precioPersonalAlmacen', component: PrecioPersonalAlmacenComponent, data: { titulo: 'Precio Personal Almacen' }},

          

            //Creacion de formulario
            { path: 'precioPlataformaCamForm', component: PrecioPlataCamFormComponent, data: { titulo: 'Formulario Plataforma Cam' }},
            { path: 'cocesnaForm', component: PrecioSobreCocesnaFormComponent, data: { titulo: 'Formulario Sobre Cocesna' }},
            { path: 'aterrizajeCam', component: PrecioAterrizajeCamFormComponent, data: { titulo: 'Formulario Aterrizaje Cam' }},

            { path: 'motorForm', component: PrecioMotoresFormComponent, data: { titulo: 'Formulario Motores' }},
            { path: 'cateringForm', component: PrecioCateringFormComponent, data: { titulo: 'Formulario Catering' }},

            { path: 'calculoSeneamForm', component: PrecioCalculoSeneamFormComponent, data: { titulo: 'Formulario Calculo Seneam' }},
            { path: 'equipoRampaForm', component: PrecioEquipoRampaFormComponent, data: { titulo: 'Formulario Equipo Rampa' }},
            { path: 'hotelTripulacionForm', component: PrecioHotelTripulacionFormComponent, data: { titulo: 'Formulario Hotel Tripulacion' }},

            { path: 'mentenimientoForm', component: PrecioMantenimientoFormComponent, data: { titulo: 'Formulario Mantenimiento' }},
            { path: 'personalAlamacenForm', component: PrecioPersonalAlmacenFormComponent, data: { titulo: 'Formulario Personal Almacen' }},
            { path: 'personalRampaForm', component: PrecioPersonalRampaFormComponent, data: { titulo: 'Formulario Personal Rampa' }},

            { path: 'plataformaForm', component: PrecioPlataformaFormComponent, data: { titulo: 'Formulario Plataforma' }},
            { path: 'rentaAlmacenForm', component: PrecioRentaAlmacenFormComponent, data: { titulo: 'Formulario Renta Almacen' }},
            { path: 'seguridadForm', component: PrecioSeguridadFormComponent, data: { titulo: 'Formulario Seguridad' }},

            { path: 'supervicionDespachoForm', component: PrecioSupervicionDespachoFormComponent, data: { titulo: 'Formulario Supervicion Despacho' }},
            { path: 'supervicionDespachoCamForm', component: PrecioSupervicionDespachoCamFormComponent, data: { titulo: 'Formulario Supervicion Despacho Cam' }},
            { path: 'viaticosForm', component: PrecioViaticosFormComponent, data: { titulo: 'Formulario Viaticos' }},

            { path: 'equipoRampaForm', component: PrecioEquipoRampaComponent, data: { titulo: 'Formulario Renta Equipo Rampa' }},
            { path: 'migracionForm', component: PrecioMigracionCamFormComponent, data: { titulo: 'Formulario Migracion Cam' }},

            { path: 'aterrizajeMexForm', component: PrecioAterrizajeMexFormComponent, data: { titulo: 'Formulario Aterrizaje Mexico' }},

            { path: 'servicioRampaForm', component: PrecioServicioRampaFormComponent, data: { titulo: 'Formulario Servicio Rampa' }},
            { path: 'servicioRampaCamForm', component: PrecioServicioRampaCamFormComponent, data: { titulo: 'Formulario Servicio Rampa Cam' }},

            { path: 'deterOperadoresForm', component: DeterOperadoresFormComponent, data: { titulo: 'Formulario Determinacion Operadores' }},
            { path: 'operadoresVuelosForm', component: OperadorVuelosFormComponent, data: { titulo: 'Formulario Operadores Vuelo' }},


            /*historicos*/

            { path: 'precioAterrizajeMexHist', component: PrecioAterrizajeMexHistComponent, data: { titulo: 'Precio Aterrizaje México' }},
            { path: 'precioPlataformaHist', component: PrecioPlataformaHistComponent, data: { titulo: 'Precio Plataforma' }},
            { path: 'precioCombustibleHist', component: PrecioCombustibleHistComponent, data: { titulo: 'Precio Combustible' }},

            { path: 'precioAterrizaCamHist', component: PrecioAterrizajeCamHistComponent, data: { titulo: 'Precio Aterrizaje CAM' }},
            { path: 'precioCateringHist', component: PrecioCateringHistComponent, data: { titulo: 'Precio Catering' }},
            { path: 'precioHotelTripulacionHist', component: PrecioHotelTripulacionHistComponent, data: { titulo: 'Precio Hotel Tripulacion' }},
            { path: 'precioMantenimientoHist', component: PrecioMantenimientoHistComponent, data: { titulo: 'Precio Matenimiento' }},
           

            { path: 'precioMigracionCamHist', component: PrecioMigracionCamHistComponent, data: { titulo: 'Precio Migracion CAM' }},
            { path: 'precioMotoresHist', component: PrecioMotoresHistComponent, data: { titulo: 'Precio Motores' }},
            { path: 'precioPersonalRampaHist', component: PrecioPersonalRampaHistComponent, data: { titulo: 'Precio Personal Rampa' }},
            { path: 'precioPlataformaCamHist', component: PrecioPlataformaCamHistComponent, data: { titulo: 'Precio Plataforma CAM' }},
            { path: 'precioRentaAlmacenHist', component: PrecioRentaAlmacenHistComponent, data: { titulo: 'Precio Renta Almacen' }},

            { path: 'precioRentaEquipoRampaHist', component: PrecioRentaEquipoRampaHistComponent, data: { titulo: 'Precio Renta Equipo Rampa' }},
            { path: 'precioSeguridadHist', component: PrecioSeguridadHistComponent, data: { titulo: 'Precio Seguridad' }},
            { path: 'precioSupervicionDespachoHist', component: PrecioSupervicionDespachoHistComponent, data: { titulo: 'Precio Supervicion Despacho' }},
            { path: 'precioSupervicionDespachoCamHist', component: PrecioSupervicionDespachoCamHistComponent, data: { titulo: 'Precio Supervicion Despacho CAM' }},
            { path: 'precioViaticosHist', component: PrecioViaticosHistComponent, data: { titulo: 'Precio Viaticos' }},

            { path: 'precioCSeneamHist', component: PrecioCalculoSeneamHistComponent, data: { titulo: 'Precio Calculo Seneam' }},
            { path: 'precioServicioRampaHist', component: PrecioServicioRampaHistComponent, data: { titulo: 'Precio Servicio Rampa' }},
            { path: 'precioServicioRampaCamHist', component: PrecioServicioRampaCamHistComponent, data: { titulo: 'Precio Servicio Rampa CAM' }},
            { path: 'precioSobreCocesnaHist', component: PrecioSobreCocesnaHistComponent, data: { titulo: 'Precio Sobre Cocesna' }},
            { path: 'precioPersonalAlmacenHist', component: PrecioPersonalAlmacenHistComponent, data: { titulo: 'Precio Personal Almacen' }},


            { path: 'operacionOrigen', component: OperacionesOrigenComponent, data: { titulo: 'Operación por Origen' }},
            { path: 'operacionMatricula', component: OperacionesMatriculaComponent, data: { titulo: 'Operación por Matricula' }},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


