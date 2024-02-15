export class Pokemon {

    constructor(data){
        this.name = data.name
        this.url = data.url
        
    }


    get WildListOfPokemonTemplate() {
        return `
        <button class="m-2 fs-3 btn btn-warning" onclick="app.WildPokemonController.getPokemonDetails('${this.name}')">${this.name}</button>
        `
    }
}


// const Properties = {

    
//         "name": {
//           "type": "String",
//           "required": true,
//           "maxLength": 100
//         },
//         "nickName": {
//           "type": "String",
//           "maxLength": 100
//         },
//         "img": {
//           "type": "String",
//           "required": true,
//           "maxLength": 500
//         },
//         "weight": {
//           "type": "String",
//           "maxLength": 100
//         },
//         "height": {
//           "type": "String",
//           "maxLength": 100
//         },
//         "types": [
//           {}
//         ],
//         "creatorId": {
//           "type": "ObjectId",
//           "required": true,
//           "ref": "Account"
//         }
//       }



