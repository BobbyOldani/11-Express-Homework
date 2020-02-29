const express = require("express");
const path = require("path");
// const fs = require("fs");
const notepad = require("./Notepad");

// let pad = new Notepad();

let app = express();
let PORT = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

// app.get("/api/notes", function (req, res) {

// }) 

app.post("/api/notes", function (req, res) {
    // console.log(req.body);
    notepad.writeToJson(req.body)
})

// app.delete("/api/notes/:id", function(req, res) {

// })



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


