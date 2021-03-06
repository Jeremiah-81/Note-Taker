// The-Real-Note-Taker-homework
const express = require("express");
const fs = require("fs");
const { METHODS } = require("http");
const path = require("path");

//// Begin the sequence to start the application and create a port. ////
const app = express();
const PORT = process.env.PORT || 3001;

//// Start the parsing process setup and folder position. ////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// We need to create a list of routes for each one of these methods GET, POST, DELETE.

//// Get Route Method ////
app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    // console.log(data)
    if (err) throw err;
    const parsedData = JSON.parse(data);
    res.json(parsedData);
  });
});

// this is connecting the html files to the public folder
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

//// Post Route Method ////
app.post("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    const newNote = req.body;
    console.log(req);
    parsedData.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(parsedData), (err) => {
      if (err) throw err;
      res.json(parsedData);
    });
  });
});

// Delete Route
app.delete("/api/notes/:id", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, notes) => {
    if (err) throw err;
    const { id } = req.params;
    let allNotes = JSON.parse(notes);
    const isDeleted = allNotes.find((note) => note.id === parseInt(id));
    if (isDeleted) {
      notes = allNotes.filter((note) => note.id !== parseInt(id));
      fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.status(200).json(notes);
      });
      console.log(notes);
    } else {
      res.status(404).json({ message: "Is this message deleted?" });
    }
  });
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
