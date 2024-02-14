export class Pokemon {

    constructor(data){
        this.name = data.name
        this.nickname = data.nickname
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        
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



