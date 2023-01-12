export class PrecioPlataformaCamHist{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioPlataformaCamHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}



export interface CargarPrecioPlataformaCam{
    total:number;
    precios:PrecioPlataformaCamHist[];
}