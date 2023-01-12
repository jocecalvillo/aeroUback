export class PrecioSeguridadHist{

    constructor(
        public est:string,
        public importeUsd:number,
        public aeropuerto:string,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioSeguridaHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public aeropuerto?:string,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioSeguridaHist{
    total:number;
    precios:PrecioSeguridadHist[];
}