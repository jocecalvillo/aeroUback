export class PrecioAterrizajeCamHist{

    constructor(
        public est:string,
        public importeUsd:number,
    ){}

}


export interface CargarPrecioAterrizajeCamHist{
    total:number;
    precios:PrecioAterrizajeCamHist[];
}