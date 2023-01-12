export class PrecioSupervicionDespachoHist{

    constructor(
        public est:string,
        public importeUsd:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioSupervicionDespachoHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
       
    ){}

}

export interface CargarPrecioSupervicionDespachoHist{
    total:number;
    precios:PrecioSupervicionDespachoHist[];
}