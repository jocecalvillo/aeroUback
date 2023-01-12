export class PrecioMantenimiento{

    constructor(
        public est:string,
        public importeUsd:number,
        public aeropuerto:string,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioMantenimientoForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public aeropuerto?:string,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioMantenimiento{
    total:number;
    precios:PrecioMantenimiento[];
}