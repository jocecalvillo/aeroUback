
export class SumaryXa{

    constructor(
        public uid:string,
        public clave:string,
        public bitacora:string,
        public clasificacion:string,
        public operadorVuelo:string,
        public operadorTramo:string,
        public matricula:string,
        public dia:number,
        public numeroVuelo:number,
        public origenDestino:string,
        public origen:string,
        public destino:string,
        public nacInt:string,
        public conSumLts:number,
        public sumLts:number,
        public conSumGls:number,
        public comConsumido:number,
        public minPlataformaExt:number,
        public tampaTramos:string,
        public tipoCambioUsd:number,
        public matchRampa:string,
        public vueloOd:string,
        public precioAterrizaje:string,
        public match:string,
        public precioPlataforma:number,
        public precioCombustibleAsa:number,
        //costo operacion
        public aterrizaje:number,
        public plataforma:number,
        public seneam:number,
        public sobreVuelosCubaEuros:number,
        public combustible:number,
        //costos operciones usd
        public matchOp:string,
        public matchCatering:string,
        //Costo Operacionales USD
        public match2Summary:string,
        public aterrizajeCostOp:number,
        public plataformaCostOp:number,
        public seneamCostOp:number,
        public servicioRampa:number,
        public combustibleCostOp :number,
        public sobreVueloCuba:number,
        public sobreVueloPanama:number,
        public coscesna:number,
        public servicioRampaMia:number,
        public plataformaMia:number,
        public cateringMia:number,
        public aterrizajeGuaCam:number,
        public plataformaGuaCam:number,
        public supervisionDespachoGuaCam:number,
        public migracionGuaCam:number,
        public serviciosRampaGuaCam:number,
        public supervisionDespachoSjo:number,
        public seguridad:number,
        public aphisUsd:number,
        public supervisionDespachoGuaTampa:number,
        public supervisionDespachoSjoTampa:number,
        public combustibleGls:number,
        public combustibleConsumidoGls:number,
        public aterrizajeUsd:number,
        public cateringOrdUsd:number,
        public seguridadOrd:number,
        public mantoOrd:number,
        

    ){}

}


export interface CargarSumaryXa{
    total:number;
    precios:SumaryXa[];
}