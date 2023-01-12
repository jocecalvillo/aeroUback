export class PrecioHotelTripulacionHist{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public aeropuerto:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioHotelTripulacionHistForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public aeropuerto?:string,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioHotelTripulacionHist{
    total:number;
    precios:PrecioHotelTripulacionHist[];
}