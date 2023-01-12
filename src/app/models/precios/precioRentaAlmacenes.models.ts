export class PrecioRentaAlmacenes{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioRentaAlmacenesForm{

    constructor(
       
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}


export interface CargarPrecioRentaAlmacenes{
    total:number;
    precios:PrecioRentaAlmacenes[];
}