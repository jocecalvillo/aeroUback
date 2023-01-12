export class PrecioAterrizajeCam{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
       
    ){}

}

export class PrecioAterrizajeCamForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
       
    ){}

}


export interface CargarPrecioAterrizajeCam{
    total:number;
    precios:PrecioAterrizajeCam[];
}