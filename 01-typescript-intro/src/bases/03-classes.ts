// export class Pokemon{
    
//     public id:number;
//     public name:string;

//     constructor(id:number,name:string){
//         this.id=id;
//         this.name=name;
//         console.log('Constructor llamado');
//     }
// }


// TODO: FORMA CORTA
export class Pokemon{

    constructor(
        public id:number, 
        public name:string
    ){}
}

export const charmanderClass = new Pokemon(1,'CHARMANDER');
console.log(charmanderClass);