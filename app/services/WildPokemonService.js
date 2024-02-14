import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeAPI } from "./AxiosService.js"

class WildPokemonService {

    async getWildPokemon() {
        const response = await pokeAPI.get('?limit=10&offset=0')
        console.log('init response data frm service', response.data);

        const newPokemon = response.data.results.map(pokemonPOJO => new Pokemon(pokemonPOJO))
        AppState.wildPokemon = newPokemon
        console.log('reassigned response frm service', newPokemon)
    }


}

export const wildPokemonService = new WildPokemonService()