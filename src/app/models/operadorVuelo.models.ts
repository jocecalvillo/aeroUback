

export class OperadorVuelos{

    constructor(
        public uid:string,
        public vuelo: string,
        public origen:string,
        public destino: string,
        public cliente:string,
        public clave: string,
        public clase: string,
    ){}
}


export class OperadorVuelosForm{

    constructor(
        public vuelo?: string,
        public origen?:string,
        public destino?: string,
        public cliente?:string,
        public clave?: string,
        public clase?: string,
    ){}
}