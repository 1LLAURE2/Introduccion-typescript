export const pokemonIds = [1,20,30,40,66];

// pokemonIds.push('asd');

// console.log(pokemonIds);

export interface Pokemon{
    id:number;
    name:string;
    age?:number;
}

export const bulbasur:Pokemon ={
    id:1,
    name:'Bulbasur'
}

export const charmander:Pokemon={
    id:4,
    name:'Charmander'
}
console.table(bulbasur)