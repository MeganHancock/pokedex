import { AppState } from "../AppState.js";
import { DetailedPokemon } from "../models/DetailedPokemon.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeAPI } from "./AxiosService.js"

class WildPokemonService {

    async getWildPokemon() {
        const response = await pokeAPI.get('?limit=20&offset=0')
        // console.log('init response data frm service', response.data);
        const newPokemon = response.data.results.map(pokemonPOJO => new Pokemon(pokemonPOJO))
        AppState.wildPokemon = newPokemon
        // console.log('reassigned response frm service', newPokemon)
    }

    async getPokemonDetails(pokeName) {
        const response = await pokeAPI.get(`${pokeName}`)
        // console.log('poke response', response.data);
        const newDetailedPokemon = new DetailedPokemon(response.data)
        console.log('new detailed pokemon', newDetailedPokemon);
        AppState.activeDetailedPokemon = newDetailedPokemon

        //  try {

        //  } catch (error) {

        //  }
    }

}

export const wildPokemonService = new WildPokemonService()