
import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

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
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves[0].move);
        
        return data.moves;
    }

}

console.log("**************************");
const pokeApiAxios=new PokeApiAdapter(); //creo la instancia
const pokeApiFetch = new PokeApiFetchAdapter();
export const charmanderInjection = new Pokemon( 4, 'Charmander', pokeApiFetch);

charmanderInjection.getMoves();