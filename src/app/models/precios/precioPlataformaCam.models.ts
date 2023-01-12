export class PrecioPlataformaCam{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioPlataformaCamForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}



export interface CargarPrecioPlataformaCam{
    total:number;
    precios:PrecioPlataformaCam[];
}