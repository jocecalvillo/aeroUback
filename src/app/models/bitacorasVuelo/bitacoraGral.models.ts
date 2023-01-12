export class BitacoraGral{

    constructor(
        public clave:string,
        public matricula:string,
        public opTramo:number,
        public opOD:string,
        public origenDestino:string,
        public nacInt:string,
        public horarioAterrizaje:string,

        public horarioManifestoLLegada:string,
        public horarioManifestoSalida:string,
        public bitacora:number,
        public numVuelo:number,
        public clasificacion:string,

        public operadorVuelo:string,
        public dia:string,
        public manifestoLLegada:string,
        public manifestoSalida:string,

        public tiempoPlataformaHr:string,
        public minPlataformaMex:string,
        public hrSalidaZulu:string,
        public hrSalidaReal:string,

        public capitanVuelo:string,
        public oficialPrimero:string,

        public oficialSegundo:string,
        public oficialTercero:string,
        public oficialCuarto:string,

        public oficialQuinto:string,
        public pierna:number,
        public fecha:string,

        public origen:string,
        public destino:string,
        public horaSalida:string,
        public horaDespegue:string,
        public horaAterrizaje:string,
        public estacionamiento:string,



        public hrBloque:string,
        public hrVuelo:string,
        public ciclosVuelo:number,
        public hrMexico:string,
        public combustibleSuministroTN:number,
        public combustibleSuministroLibs:number,
        public combustibleSuministroGal:number,

        public combustibleSuministroLts:number,
        public combustibleSuministroKgs:number,

        public combustibleSalidaTN:number,
        public combustibleSalidaLibs:number,
        public combustibleSalidaKg:number,
        public combustibleLLegadaTN:number,
        public combustibleLLegadaLibs:number,
        public combustibleLLegadaKg:number,

        public cargaTN:number,
        public cargaLibs:number,
        public cargaKg:number,
        public apuHr:number,
        public apuCiclos:number,
        public suministroGal:number,

        public suministroLibs:number,
        public suministroLts:number,
        public cargoMvtKg:number,
        public convSuministroTn:number,
        public convSuministroGal:number,
        public convSuministroLts:number,

        public convSuministroLibs:number,
        public consumoLibs:number,
        public tampaDepartues:string,
        public tampaTramos:string,
        public operaciones:string,
              
    ){}

}



export interface CargarBitacoraGral{
    total:number;
    bitVuelos:BitacoraGral[];
}