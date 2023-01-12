export class PrecioSeguridad{

    constructor(
        public est:string,
        public importeUsd:number,
        public aeropuerto:string,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioSeguridaForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public aeropuerto?:string,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioSegurida{
    total:number;
    precios:PrecioSeguridad[];
}