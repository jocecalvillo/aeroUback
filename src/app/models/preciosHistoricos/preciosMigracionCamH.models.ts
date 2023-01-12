export class PrecioMigracionCamHist{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioMigracionCamHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}
}



export interface CargarPrecioMigracionCamHist{
    total:number;
    precios:PrecioMigracionCamHist[];
}