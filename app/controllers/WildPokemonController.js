import { AppState } from "../AppState.js"
import { wildPokemonService } from "../services/WildPokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

function _drawWildList() {
    const wildPokemon = AppState.wildPokemon
    let htmlString = ''
    wildPokemon.forEach(pokemon => htmlString += pokemon.WildListOfPokemonTemplate)
    setHTML('wildPokemonList', htmlString)
}

export class WildPokemonController {

    constructor() {
        console.log('wild pokemon controller')
        this.getWildPokemon()

        AppState.on('wildPokemon', _drawWildList)
    }

    async getWildPokemon() {
        try {
            await wildPokemonService.getWildPokemon()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }

    }
}