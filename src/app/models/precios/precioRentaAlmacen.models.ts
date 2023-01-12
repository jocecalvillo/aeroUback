export class PrecioRentaAlmacen{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioRentaAlmacenForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}


export interface CargarPrecioRentaAlmacen{
    total:number;
    precios:PrecioRentaAlmacen[];
}