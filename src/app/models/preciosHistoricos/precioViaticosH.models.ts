export class PrecioViaticosHist{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public aeropuerto:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioViaticosHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public aeropuerto?:string,
        public idHistorico?:string,
        public usuario?:string
    ){}

}


export interface CargarPrecioViaticosHist{
    total:number;
    precios:PrecioViaticosHist[];
}