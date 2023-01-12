export class PrecioAterrizajeCamHist{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string, 
        public usuario:string
       
    ){}

}

export class PrecioAterrizajeCamHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
       
    ){}

}


export interface CargarPrecioAterrizajeCamHist{
    total:number;
    precios:PrecioAterrizajeCamHist[];
}