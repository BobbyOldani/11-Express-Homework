const fs = require("fs");

class Notepad {
    writeToJson(newNote) {
        fs.readFile("db.json", function (err, data) {
            let jsonData = JSON.parse(data);
            jsonData.append(newNote);
            JSON.stringify(jsonData);
            fs.writeFile("db.json", jsonData); 
        })
        

    }

}

module.exports = new Notepad();