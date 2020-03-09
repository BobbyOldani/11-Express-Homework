const fs = require("fs");
const uuidv1 = require("uuidv1");
const dbJson = require("./db/db.json");

class Notepad {
  writeToJson(newNote) {
    newNote.id = uuidv1();
    console.log(newNote);
    fs.readFile("./db/db.json", "utf-8", function(err, data) {
      if (err) throw err;
      console.log("This is the data response from the fs.readFile: " + data);
      let jsonData = JSON.parse(data);
      // console.log("This is the jsonData which is parsed: " + jsonData);
      jsonData.push(newNote);
      //   console.log("This is jsonData after append: " + jsonData);
      let dataString = JSON.stringify(jsonData);
      //   console.log("This is the stringified dataString" + dataString);
      fs.writeFileSync("db/db.json", dataString);
      console.log("New note has been added to the database");
    });
  }
  deleteNote(deleteId) {
    console.log("deleteNote dbJson" + dbJson);
    for (let i = 0; i < dbJson.length; i++) {
      if (dbJson[i].id === deleteId) {
        console.log(dbJson[i].id);
        dbJson.splice(i, 1);
      }
    }
    let stringDbJson = JSON.stringify(dbJson);
    console.log("spliced stringified dbJson: " + stringDbJson);
    fs.writeFileSync("db/db.json", stringDbJson, function(err, results) {
      if (err) throw err;
      console.log(results);
    });
  }
}

module.exports = new Notepad();
