export class PrecioPersonalAlamacen{

    constructor(
        public est:string,
        public importeUsd:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioPersonalAlamacenForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
       
    ){}

}

export interface CargarPrecioPersonalAlamacen{
    total:number;
    precios:PrecioPersonalAlamacen[];
}