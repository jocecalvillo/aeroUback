export interface BitacoraVuelo{
    
    logBook:string;
    logBookVlo:string;
    operacion:string;
    leg:number;

    fecha:Date;
    flt:string;
    from:string;
    to:string;

    blkOut:string;
    off:string;
    on:string;
    blkIn:string;

    blockHours:string;
    flightHours:string;
    flightCycles:string;
    blkOutMex:number;

    uplift:number;
    depart:number;
    arrive:number;
    cargo:number;

     cargoT:number;
     cargoMvtT:number;
     fuelVoucherLt:number;
     fuelVoucherBitacorax1000:number;

     fuelVoucherGal:number;
     fuelVoucherBitacora2x1000:number;
     fuelVoucherTnTotal:number;
     fuelVoucherGalTotal:number;

     fuelVoucherLtTotal:number;
     errorBitacoraVsVoucher:number;
     consumoLbX1000:number;
     observaciones:string;
     
     fechaLocal: Date;
     start :string;
     finish :string;
     concepto:string;
 
     }

export interface RutaVuelo{
    ruta:string;
    acumulado: number;
}