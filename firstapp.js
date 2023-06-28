const fs = require('fs');

const data = {
    "userId": "0001",
    "userName": "DenCap",
    "firstName": "Denver",
    "lastName": "Capsi",
    "address": {
        "street": "Dubai kuruku Sandhu",
        "road": "Dubai Main Road",
        "City": "Dubai"
    }

}
fs.writeFileSync('hello.json', JSON.stringify(data))

// to run -> node firstapp.js