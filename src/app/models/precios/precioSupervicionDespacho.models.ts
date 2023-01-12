export class PrecioSupervicionDespacho{

    constructor(
        public est:string,
        public importeUsd:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioSupervicionDespachoForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
       
    ){}

}

export interface CargarPrecioSupervicionDespacho{
    total:number;
    precios:PrecioSupervicionDespacho[];
}