export class PrecioCateringHist{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public aeropuerto:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioCateringHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public aeropuerto?:string,
        public idHistorico?:string,
        public usuario?:string
    ){}

}


export interface CargarPrecioCarringHist{
    total:number;
    precios:PrecioCateringHist[];
}