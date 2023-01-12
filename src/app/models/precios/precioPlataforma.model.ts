export class PrecioPlataforma{

    constructor(
        public plataforma:string,
        public match:string,
        public nacInt:string,
        public horario:string,
        public precio:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioPlataformaForm{

    constructor(
        public plataforma?:string,
        public match?:string,
        public nacInt?:string,
        public horario?:string,
        public precio?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargaPrecioPlataforma{
    total:number;
    precios: PrecioPlataforma[];
}