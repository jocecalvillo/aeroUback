export class PrecioHotelTripulacion{

    constructor(
        public uid:string,
        public est:string,
        public importeUsd:number,
        public aeropuerto:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioHotelTripulacionForm{

    constructor(
        public est?:string,
        public importeUsd?:number,
        public aeropuerto?:string,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargarPrecioHotelTripulacion{
    total:number;
    precios:PrecioHotelTripulacion[];
}