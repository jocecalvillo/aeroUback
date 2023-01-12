export class PrecioSobreCocesna{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioSobreCocesnaForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioSobreCocesna{
    total:number;
    precios:PrecioSobreCocesna[];
}