export class Pokemon {

    constructor(data){
        this.name = data.name
        this.url = data.url
        
    }


    get WildListOfPokemonTemplate() {
        return `
        <h5>${this.name}</h5>
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



