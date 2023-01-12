export class PrecioMigracionCam{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioMigracionCamForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}
}



export interface CargarPrecioMigracionCam{
    total:number;
    precios:PrecioMigracionCam[];
}