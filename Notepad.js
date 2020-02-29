const fs = require("fs");

class Notepad {
    writeToJson(newNote) {
        console.log(newNote);
        fs.readFile("./db/db.json", "utf-8", function (err, data) {
            if (err) throw err;
            console.log("This is the data response from the fs.readFile: " + data);
            let jsonData = JSON.parse(data);
            console.log("This is the jsonData which is parsed: " + jsonData);
            // console.log(jsonData);
            jsonData.push(newNote);
            console.log("This is jsonData after append: " + jsonData);
            let dataString = JSON.stringify(jsonData);
            console.log("This is the stringified dataString" + dataString);
            fs.writeFileSync("db/db.json", dataString); 
        })
        

    }

}

module.exports = new Notepad();