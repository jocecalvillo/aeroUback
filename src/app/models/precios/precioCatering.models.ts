
export class PrecioCatering{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public aeropuerto:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioCateringForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public aeropuerto?:string,
        public idHistorico?:string,
        public usuario?:string
    ){}

}


export interface CargarPrecioCatering{
    total:number;
    precios:PrecioCatering[];
}