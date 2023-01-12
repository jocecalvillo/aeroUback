export class PrecioServicioRampaHist{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioServicioRampaHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}
export interface CargarPrecioServicioRampaHist{
    total:number;
    precios:PrecioServicioRampaHist[];
}