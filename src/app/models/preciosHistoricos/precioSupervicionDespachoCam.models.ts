export class PrecioSupervicionDespachoCamHist{

    constructor(
        public est:string,
        public importeUsd:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioSupervicionDespachoCamHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}


export interface CargarPrecioSupervicionDespachoCamHist{
    total:number;
    precios:PrecioSupervicionDespachoCamHist[];
}