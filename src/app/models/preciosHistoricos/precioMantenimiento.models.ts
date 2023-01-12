export class PrecioMantenimientoHist{

    constructor(
        public est:string,
        public importeUsd:number,
        public aeropuerto:string,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioMantenimientoHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public aeropuerto?:string,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioMantenimientoHist{
    total:number;
    precios:PrecioMantenimientoHist[];
}