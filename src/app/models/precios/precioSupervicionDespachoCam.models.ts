export class PrecioSupervicionDespachoCam{

    constructor(
        public est:string,
        public importeUsd:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioSupervicionDespachoCamForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}


export interface CargarPrecioSupervicionDespachoCam{
    total:number;
    precios:PrecioSupervicionDespachoCam[];
}