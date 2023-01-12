export class BitacoraVueloGral{

    constructor(
        public logBook:string,
        public logBookVlo:string,
        public operacion:string,
        public leg:number,
        public fecha:string,
        public flt:string,
        public from:string,

        public to:string,
        public blkOut:string,
        public off:string,
        public onn:string,
        public blkIn:string,

        public blockHours:string,
        public flightHours:string,
        public flightCycles:number,
        public blkOutMex:string,

        public uplift:number,
        public depart:number,
        public arrive:number,
        public cargo:number,

        public cargoT:number,
        public cargoMvtT:number,

        public fuelVoucherLt:number,
        public fuelVoucherBitacoraTnX1000Lt:number,
        public fuelVoucherGal:number,

        public fuelVoucherBitacoraTnX1000Gal:number,
        public fuelVoucherTnTotal:number,
        public fuelVoucherGalTotal:number,

        public fuelVoucherLtTotal:number,
        public errorBitacoraVsVoucher:number,
        public consumoLbX1000:number,
        public observaciones:string,
        public fechaLocal:string,
        public start:string,

        public finish:string,
        public concepto:string,
        public fechaCarga:string,
          
    ){}

}

export interface CargarBitacoraVueloGral{
    total:number;
    bitVuelos:BitacoraVueloGral[];
}