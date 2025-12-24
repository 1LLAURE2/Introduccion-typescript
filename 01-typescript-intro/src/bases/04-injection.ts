
import type { Move } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon {
    public readonly id: number;
    public name: string;

    private readonly http:PokeApiAdapter;

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(id: number, name: string, http:PokeApiAdapter) {
        this.id = id;
        this.name = name;
        this.http=http;
    }

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        // const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data = this.http.get('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data);
        
        return data;
    }

}

console.log("**************************");
const pokeApi=new PokeApiAdapter(); //creo la instancia
export const charmanderInjection = new Pokemon( 4, 'Charmander', pokeApi);

charmanderInjection.getMoves();