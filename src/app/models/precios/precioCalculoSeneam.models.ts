export class PrecioCalculoSeneam{

    constructor(
        public uid:string,
        public distancia:string,
        public claveSenea:string,
        public kilometros:number,
        public tarifa:string,
        public importe:number,
        public idHistorico:string,
        public usuario:string
    
    ){}

}

export class PrecioCalculoSeneamForm{

    constructor(
        public distancia?:string,
        public claveSenea?:string,
        public kilometros?:number,
        public tarifa?:string,
        public importe?:number,
        public idHistorico?:string,
        public usuario?:string
    
    ){}

}

export interface CargarPrecioCalculoSeneam{
    total:number;
    precios:PrecioCalculoSeneam[];
}