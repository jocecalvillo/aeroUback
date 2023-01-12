export class PrecioCalculoSeneamHist{

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

export class PrecioCalculoSeneamHistForm{

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

export interface CargarPrecioCalculoSeneamHist{
    total:number;
    precios:PrecioCalculoSeneamHist[];
}