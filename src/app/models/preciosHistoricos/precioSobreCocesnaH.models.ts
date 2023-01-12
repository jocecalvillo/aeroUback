export class PrecioSobreCocesnaHist{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioSobreCocesnaHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioSobreCocesnaHist{
    total:number;
    precios:PrecioSobreCocesnaHist[];
}