import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Bitacoras Estimado',
      icono: 'mdi mdi-file-chart',
      submenu: [
        
        { titulo: 'Determinación Operadores', url: 'bitDeterOperadores' },
        { titulo: 'Operadores Vuelo', url: 'bitOperadorVuelos' },
        { titulo: 'Bitacora Vuelo XA-EFR', url: 'bitVueloEfr' },
        { titulo: 'Bitacora Vuelo XA-GGL', url: 'bitVueloGgl' },
        { titulo: 'Bitacora Vuelo XA-LFR', url: 'bitVueloLfr' },
        { titulo: 'Bitacora Vuelo XA-LRC', url: 'bitVueloLrc' },
        { titulo: 'Bitacora Vuelo XA-UYR', url: 'bitVueloUyr' },

        { titulo: 'Bitacora General', url: 'bitacoraGral' },

        { titulo: 'Documento Excel', url: 'docExcel' },
        { titulo: 'Grafica Destinos', url: 'graficaDest' },
        { titulo: 'Sumary Bitacoras', url: 'sumary' },
        { titulo: 'Sumary Bitacoras Concentrado', url: 'sumaryFinal' },
        
        
      ]
    },
    {
      titulo: 'Bitacoras Real',
      icono: 'mdi mdi-poll-box',
      submenu: [
        { titulo: 'Bitacora Vuelo XA-EFR', url: 'bitReaVueloEfr' },
        { titulo: 'Bitacora Vuelo XA-GGL', url: 'bitReaVueloGgl' },
        { titulo: 'Bitacora Vuelo XA-LFR', url: 'bitReaVueloLfr' },
        { titulo: 'Bitacora Vuelo XA-LRC', url: 'bitReaVueloLrc' },
        { titulo: 'Bitacora Vuelo XA-UYR', url: 'bitReaVueloUyr' },
       
      ]
    },

    {
      titulo: 'Summary Matriculas',
      icono: 'mdi mdi-desktop-mac',
      submenu: [
        { titulo: 'Summary Efr', url: 'summaryEfr' },
        { titulo: 'Summary Ggl', url: 'summaryGgl' },
        { titulo: 'Summary Lfr', url: 'summaryLfr' },
        { titulo: 'Summary Lrc', url: 'summaryLrc' },
        { titulo: 'Summary Uyr', url: 'summaryUyr' },
      ]
    },
    
    {
      titulo: 'Configuraciones',
      icono: 'mdi mdi-desktop-mac',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'rxjs', url: 'rxjs' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Operadores Vuelo', url: 'operadorVuelo' },
        { titulo: 'Usuarios', url: 'usuarios' },
        { titulo: 'Determinación Operadores', url: 'deteOperadores' },
      ]
    },

    /*{
      titulo: 'Divisas',
      icono: 'mdi mdi-cash-usd',
      submenu: [
       
      ]
    },*/

    {
      titulo: 'Fuell',
      icono: 'mdi mdi-glass-mug',
      submenu: [
        { titulo: 'Precio Combustible', url: 'precioCombustible' },
      ]
    },
    {
      titulo: 'Precios',
      icono: 'mdi mdi-coin',
      submenu: [
        { titulo: 'Precio Aterrizaje México', url: 'precioAterrizajeMex' },
        { titulo: 'Precio Aterrizaje CAM', url: 'precioAterrizaCam' },
        { titulo: 'Precio Motores', url: 'precioMotores' },
        { titulo: 'Precio Catering', url: 'precioCatering' },
        { titulo: 'Precio Migracion CAM', url: 'precioMigracionCam' },
        { titulo: 'Precio Viaticos', url: 'precioViaticos' },
        { titulo: 'Precio Precio Hotel Tripulacion', url: 'precioHotelTripulacion' },
        { titulo: 'Precio Calculo SENEAM', url: 'precioCSeneam' }, 
        { titulo: 'Precio Sobre COCESNA', url: 'precioSobreCocesna' },
        
      ]
    },

    {
      titulo: 'Precios Historicos',
      icono: 'mdi mdi-coin',
      submenu: [
        { titulo: 'Precio Aterrizaje México', url: 'precioAterrizajeMexHist' },
        { titulo: 'Precio Aterrizaje CAM', url: 'precioAterrizaCamHist' },
        { titulo: 'Precio Motores', url: 'precioMotoresHist' },
        { titulo: 'Precio Catering', url: 'precioCateringHist' },
        { titulo: 'Precio Migracion CAM', url: 'precioMigracionCamHist' },
        { titulo: 'Precio Viaticos', url: 'precioViaticosHist' },
        { titulo: 'Precio Precio Hotel Tripulacion', url: 'precioHotelTripulacionHist' },
        { titulo: 'Precio Calculo SENEAM', url: 'precioCSeneamHist' }, 
        { titulo: 'Precio Sobre COCESNA', url: 'precioSobreCocesnaHist' },
        
      ]
    },

    {
      titulo: 'Precios Estación',
      icono: 'mdi mdi-coin',
      submenu: [
        { titulo: 'Precio Plataforma', url: 'precioPlataforma' },
        { titulo: 'Precio Personal Rampa', url: 'precioPersonalRampa' },
        { titulo: 'Precio Plataforma CAM', url: 'precioPlataformaCam' },
        { titulo: 'Precio Renta Almacen', url: 'precioRentaAlmacen' },
        { titulo: 'Precio Personal Almacen', url: 'precioPersonalAlmacen' },
        { titulo: 'Precio Renta Equipo Rampa', url: 'precioRentaEquipoRampa' },
      ]
    },

    {
      titulo: 'Precios Estación Historico',
      icono: 'mdi mdi-coin',
      submenu: [
        { titulo: 'Precio Plataforma', url: 'precioPlataformaHist' },
        { titulo: 'Precio Personal Rampa', url: 'precioPersonalRampaHist' },
        { titulo: 'Precio Plataforma CAM', url: 'precioPlataformaCamHist' },
        { titulo: 'Precio Renta Almacen', url: 'precioRentaAlmacenHist' },
        { titulo: 'Precio Personal Almacen', url: 'precioPersonalAlmacenHist' },
        { titulo: 'Precio Renta Equipo Rampa', url: 'precioRentaEquipoRampaHist' },
       
      ]
    },

    {
      titulo: 'Precios Servicios',
      icono: 'mdi mdi-coin',
      submenu: [
       
        { titulo: 'Precio Matenimiento', url: 'precioMantenimiento' },
        { titulo: 'Precio Servicio Rampa', url: 'precioServicioRampa' },
    //    { titulo: 'Precio Servcio Rampa CAM', url: 'precioServicioRampaCam' },
        { titulo: 'Precio Seguridad', url: 'precioSeguridad' },
        { titulo: 'Precio Supervicion Despacho', url: 'precioSupervicionDespacho' },
        { titulo: 'Precio Supervicion Despacho CAM', url: 'precioSupervicionDespachoCam' },
      ]
    },

    {
      titulo: 'Precios Servicios Historico',
      icono: 'mdi mdi-coin',
      submenu: [

        { titulo: 'Precio Matenimiento', url: 'precioMantenimientoHist' },
        { titulo: 'Precio Servicio Rampa', url: 'precioServicioRampaHist' },
    //    { titulo: 'Precio Servcio Rampa CAM', url: 'precioServicioRampaCam' },
        { titulo: 'Precio Seguridad', url: 'precioSeguridadHist' },
        { titulo: 'Precio Supervicion Despacho', url: 'precioSupervicionDespachoHist' },
        { titulo: 'Precio Supervicion Despacho CAM', url: 'precioSupervicionDespachoCamHist' },
       
      ]
    },

    {
      titulo: 'Resumen Operación',
      icono: 'mdi  mdi-chart-pie',
      submenu: [
        { titulo: 'Operación Origen', url: 'operacionOrigen' },
        { titulo: 'Operacion Matrícula', url: 'operacionMatricula' },
       
      ]
    },

   

   
    
  ];

  constructor() { }
}
