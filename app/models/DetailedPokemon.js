export class DetailedPokemon {
    constructor(data) {
        this.name = data.name
        this.nickname = data.nickname || ''
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types

    }

    get activePokemonTemplate() {
        return `
    <h1>${this.name}</h1>
            <span>${this.img}</span>
            <h3>Height: ${this.height}</h3>
            <h3>Weight: ${this.weight}</h3>
            <h3>Types: ${this.types}</h3>
`

    }
}