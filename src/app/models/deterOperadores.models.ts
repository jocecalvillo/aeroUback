export class DeterminacionOperadores{

    constructor(
        public uid:string,
        public match: string,
        public vuelo: string,
        public origenDestino:string,
        public origen:string,
        public destino: string,
        public clase: string,
        public cliente:string,
        
    ){}
}

export class DeterminacionOperadoresForm{

    constructor(
        public match?: string,
        public vuelo?: string,
        public origenDestino?:string,
        public origen?:string,
        public destino?: string,
        public clase?: string,
        public cliente?:string,
        
    ){}
}


export interface CargaDeterOperadores{
    total:number;
    detOperadores: DeterminacionOperadores[];
}