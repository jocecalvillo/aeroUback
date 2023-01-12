export class PrecioRentaEquipoRampa{

    constructor(
        public est:string,
        public importeUsd:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioRentaEquipoRampaForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioRentaEquipoRampa{
    total:number;
    precios:PrecioRentaEquipoRampa[];
}