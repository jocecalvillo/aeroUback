export class PrecioPersonalAlamacenHist{

    constructor(
        public est:string,
        public importeUsd:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioPersonalAlamacenHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
       
    ){}

}

export interface CargarPrecioPersonalAlamacenHist{
    total:number;
    precios:PrecioPersonalAlamacenHist[];
}