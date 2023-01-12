export class PrecioRentaAlmacenesHist{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioRentaAlmacenesHistForm{

    constructor(
       
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}


export interface CargarPrecioRentaAlmacenesHist{
    total:number;
    precios:PrecioRentaAlmacenesHist[];
}