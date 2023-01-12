export class PrecioPersonalRampa{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}


export class PrecioPersonalRampaForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}


export interface CargarPrecioPersonalRampa{
    total:number;
    precios:PrecioPersonalRampa[];
}