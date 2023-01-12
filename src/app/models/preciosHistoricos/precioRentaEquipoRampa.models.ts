export class PrecioRentaEquipoRampaHist{

    constructor(
        public est:string,
        public importeUsd:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioRentaEquipoRampaHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioRentaEquipoRampaHist{
    total:number;
    precios:PrecioRentaEquipoRampaHist[];
}